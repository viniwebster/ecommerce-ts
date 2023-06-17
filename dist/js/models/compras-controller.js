import { Compra } from "../produto/compra.js";
import { Compras } from "./compras.js";
import { View } from "./compra-view.js";
export class CompraController {
    constructor() {
        this.compras = new Compras();
        this.comprasView = new View();
        this.nome = document.querySelector('#name');
        this.quantidade = document.querySelector('#amount');
        this.preco = document.querySelector('#price');
    }
    adiciona() {
        const compra = Compra.criaCompra(this.nome.innerHTML, this.quantidade.value, this.preco.value);
        this.atualizaLista(compra);
        this.comprasView.update(compra.quantidade, compra.valor);
        console.log(this.compras.listaCompras());
    }
    atualizaLista(compra) {
        this.compras.adicionaCompra(compra);
        this.quantidade.value = "1";
    }
}
