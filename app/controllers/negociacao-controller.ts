import { DiaDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { negociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes(); 
    private negociacoesView = new negociacoesView('#negociacoesView', true);
    private mensagemView = new MensagemView('#mensagemView');
    
    private SABADO = 6;
    private DOMINGO = 0;

    constructor(){
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;;
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {

        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if(!this.ehDiaDaSemana(negociacao.data)){
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas');
            return ;
        } 

            this.negociacoes.adiciona(negociacao);
            this.limparFormulario();
            this.atualizaView();

    }

    private ehDiaDaSemana(data: Date) {
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
    }

/*     private criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value,);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    } */

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }

}