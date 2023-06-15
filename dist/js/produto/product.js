import { View } from "./compra-view";
export class Product {
    constructor() {
        this.buyed = new View();
        this.preco = document.querySelector('#price');
        this.quantidade = document.querySelector('#amount');
        this.cart = document.querySelector('#lista');
    }
    adiciona() {
        this.adicionaNoCarrinho();
        this.buyed.qtdCart(this.quantidade.value);
    }
    adicionaNoCarrinho() {
        this.cart.innerHTML += this.buyed.addOnCart(this.preco.value, this.quantidade.value);
        console.log("Produto Adicionado");
    }
}
