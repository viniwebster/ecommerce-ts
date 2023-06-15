const imgPrimary = document.querySelector('#img-principal') as HTMLImageElement;
const imgDiv = document.querySelector('.img__thumbs') as HTMLElement;

export function selectImg(index: string | number) {
    imgPrimary.src = `./images/image-product-${index}.jpg`;
}

export function toggleImg(img: any) {
    const imgActive = imgDiv.querySelector('.active') as HTMLElement;  
    imgActive.classList.remove("active");   
    img.parentNode.classList.add("active");
}

//slide timeout
export function imgSlide() {
    const imgs = document.querySelectorAll('.img-icon');
    let i = 1;
    setInterval(() => {
        selectImg(i);
        toggleImg(imgs[i - 1]);
        i++;
        if (i > imgs.length)
            i = 1;
    }, 5000);
  }