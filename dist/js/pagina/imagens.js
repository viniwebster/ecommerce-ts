const imgPrimary = document.querySelector('#img-principal');
const imgDiv = document.querySelector('.img__thumbs');
export function selectImg(index) {
    imgPrimary.src = `./images/image-product-${index}.jpg`;
}
export function toggleImg(img) {
    const imgActive = imgDiv.querySelector('.active');
    imgActive.classList.remove("active");
    img.parentNode.classList.add("active");
}
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
