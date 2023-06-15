export class Compra {
    constructor(_nome, _quantidade, _valor, _total) {
        this._nome = _nome;
        this._quantidade = _quantidade;
        this._valor = _valor;
        this._total = _total;
    }
    get nome() {
        return this._nome;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    static criaCompra(nome, quantidade, valor) {
        const qtd = parseInt(quantidade);
        const preco = parseFloat(valor);
        const total = qtd * preco;
        return new Compra(nome, qtd, preco, total);
    }
}
