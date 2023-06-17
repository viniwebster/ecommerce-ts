import { imgSlide, toggleImg, selectImg } from "./imagens.js";
import { viewModal } from "./modal.js";
import { toggleMenuMobile } from "./menuMobile.js";
const btnQtd = document.querySelectorAll('.btn');
const itemQtd = document.getElementById('amount');
btnQtd.forEach(btn => {
    btn.addEventListener('click', () => {
        changeQtd(btn);
    });
});
const btnMenu = document.getElementById('menu');
btnMenu.addEventListener('click', () => toggleMenuMobile());
const cart = document.getElementById('cart');
const cartContainer = document.querySelector('.cart_itens-container');
cart.addEventListener('click', () => cartContainer.classList.toggle('cart-active'));
const imgModal = document.querySelector('.img_container');
const imgPrimary = document.getElementById('img-principal');
const modal = document.getElementById('modal');
imgModal.addEventListener('click', () => modal.innerHTML = viewModal(imgPrimary.src));
const imgs = document.querySelectorAll('.img-icon');
imgs.forEach((img, index) => {
    img.addEventListener('click', () => {
        selectImg(index + 1);
        toggleImg(img);
    });
});
imgSlide();
function changeQtd(btn) {
    btn.value === "-" ? itemQtd.value-- : itemQtd.value++;
    if (itemQtd.value <= 1)
        itemQtd.value = 1;
}
export default "./index.js";
