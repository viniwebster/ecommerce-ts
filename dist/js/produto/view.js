export class View {
    constructor() {
        this.imgPrimary = document.querySelector('#img-principal');
        this.imgDiv = document.querySelector('.img__thumbs');
    }
    addOnCart(value, qtd) {
        return `
        <li class="lista-item">
          <img class="item-img" src="./images/image-product-1-thumbnail.jpg" alt="Img product">
            <div class="item-desc">
              <p>Fall Limited Edition sneakers</p>
              <span class="value">${value} x ${qtd}</span>   <span class="total">$${(parseFloat(value) * parseFloat(qtd)).toFixed(2)}</span>
            </div>
          <img id="delete" class="btn-delete" src="./images/icon-delete.svg" alt="Remove from cart" onclick="this.parentNode.remove()">
        </li>`;
    }
    qtdCart(qtd) {
        const qtdCart = document.getElementById('quantidade');
        qtdCart.value = parseFloat(qtdCart.value) + qtd;
    }
    viewModal(img) {
        return `
      <div class="modal-container">
        <div class="img__primary">
          <img class="close" id="close" src="./images/icon-close.svg" alt="Close modal" onclick="this.parentNode.parentNode.remove()">
          <div class="img_container">    
            <img src="${img}" alt="imagem do produto">
          </div>  
        </div>      
      </div>
      `;
    }
    toggleMenuMobile() {
        const navContainer = document.querySelector('.nav__container');
        const btnMenu = document.getElementById('menu');
        if (navContainer.style.display == "none") {
            navContainer.style.display = "flex";
            btnMenu.src = "./images/icon-close-black.svg";
        }
        else {
            navContainer.style.display = "none";
            btnMenu.src = "./images/icon-menu.svg";
        }
    }
    selectImg(index) {
        this.imgPrimary.src = `./images/image-product-${index}.jpg`;
    }
    toggleImg(img) {
        const imgActive = this.imgDiv.querySelector('.active');
        imgActive.classList.remove("active");
        img.parentNode.classList.add("active");
    }
    imgSlide() {
        const imgs = document.querySelectorAll('.img-icon');
        let i = 1;
        setInterval(() => {
            this.selectImg(i);
            this.toggleImg(imgs[i - 1]);
            i++;
            if (i > imgs.length)
                i = 1;
        }, 5000);
    }
}
