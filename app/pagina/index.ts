import { imgSlide, toggleImg, selectImg } from "./imagens.js";
import { viewModal } from "./modal.js";
import { toggleMenuMobile } from "./menuMobile.js";
import { View } from "../models/compra-view.js";

//btnQuantidade
const btnQtd = document.querySelectorAll('.btn');
const itemQtd = document.getElementById('amount') as any;
btnQtd.forEach(btn => {
    btn.addEventListener('click', ()=>{
        changeQtd(btn);
    })   
})


//menuMobile
const btnMenu = document.getElementById('menu') as HTMLElement;
btnMenu.addEventListener('click', () => toggleMenuMobile());


//cartMenu
const cart = document.getElementById('cart') as HTMLElement;
const cartContainer = document.querySelector('.cart_itens-container') as HTMLElement;
cart.addEventListener('click', () => cartContainer.classList.toggle('cart-active'));


//modal
const imgModal = document.querySelector('.img_container') as HTMLElement;
const imgPrimary = document.getElementById('img-principal') as HTMLImageElement;
const modal = document.getElementById('modal') as HTMLElement;

imgModal.addEventListener('click', () => modal.innerHTML = viewModal(imgPrimary.src));


//images 
const imgs = document.querySelectorAll('.img-icon');
imgs.forEach((img, index) => {
    img.addEventListener('click', ()=> {
        selectImg(index + 1);
        toggleImg(img);
    });
});

imgSlide(); 


function changeQtd(btn: any) {
    btn.value === "-" ? itemQtd.value-- : itemQtd.value++;
    if (itemQtd.value <= 1) itemQtd.value = 1;
 }

const btnDelete = document.querySelectorAll('.btn-delete');
if (btnDelete) {
    const btnView = new View();
    btnDelete.forEach(btnDelete => {
        btnDelete.addEventListener('click', () => btnView.removeDoCarrinho())
    });
}


console.log(btnDelete);


 export default "./index.js"
 