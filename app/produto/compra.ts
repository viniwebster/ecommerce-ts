export class Compra {
   
    constructor(
        private _nome: string,
        private _quantidade: number,
        private _valor: number,
        private _total: number
    ){}

    get nome(){
        return this._nome
    }

    get quantidade(){
        return this._quantidade
    }

    get valor(){
        return this._valor
    }

    public static criaCompra(nome: string, quantidade: string, valor: string): Compra{

        const qtd = parseInt(quantidade);
        const preco = parseFloat(valor);
        const total = qtd * preco;

        return new Compra(nome, qtd, preco, total);
    }
    
}