import { Compra } from "../produto/compra.js";
import { Compras } from "./compras.js";
import { View } from "./compra-view.js";

export class CompraController {

    private nome: Element; 
    protected quantidade: HTMLInputElement;
    private preco: HTMLInputElement;
    private compras = new Compras(); 
    private comprasView = new View();
    
    constructor(){
        this.nome = document.querySelector('#name') as Element;
        this.quantidade = document.querySelector('#amount') as HTMLInputElement;
        this.preco = document.querySelector('#price') as HTMLInputElement;
    }

    public adiciona() : void{
        const compra = Compra.criaCompra(
            this.nome.innerHTML,
            this.quantidade.value,
            this.preco.value
        )

        this.atualizaLista(compra);
        this.comprasView.adicionaNoCarrinho(compra.quantidade, compra.valor);
        
        console.log(this.compras.listaCompras());
    }

    private atualizaLista(compra: Compra): void{
        this.compras.adicionaCompra(compra);
        this.quantidade.value = "1";
    }

}