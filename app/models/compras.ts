import { Compra } from "../produto/compra.js";

export class Compras {

    private compras: Array<Compra> = [];

    public adicionaCompra(compra: Compra): void{
        this.compras.push(compra);
    }

    public listaCompras(): ReadonlyArray<Compra> {
        return this.compras
    }

}