import { CompraController } from "./models/compras-controller.js";
import index from "./pagina/index.js";
index;
const compra = new CompraController();
const btnBuy = document.querySelector('.form');
btnBuy.addEventListener('submit', (e) => {
    e.preventDefault();
    compra.adiciona();
});
