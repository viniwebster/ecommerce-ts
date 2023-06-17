import { Compras } from "./compras";

export class View {
    
    carrinho: HTMLElement;
    
    constructor(){
      this.carrinho = document.querySelector('.item-comprado') as HTMLElement;
    }

    private adicionaNoCarrinho(quantidade: number, preco: number): string {
        return `
            <ul id="lista">
                  <li class="lista-item">
                  <img class="item-img" src="./images/image-product-1-thumbnail.jpg" alt="">
                    <div class="item-desc">
                      <p>Fall Limited Edition sneakers</p>
                      <span class="value">$${preco} x<span id="qtd"> ${quantidade} </span></span>   <span class="total">$${preco * quantidade}</span>
                    </div>
                  <img class="btn-delete" src="./images/icon-delete.svg" alt="Button Remove" onclick="this.parentNode.remove(),
                  document.getElementById('quantidade').value = 0,
                  document.querySelector('.item-comprado').innerHTML = 'Youre cart is empty'; ">
                </li>
                <input class="btn-checkout" type="button" value="Checkout">
            </ul>
            `
    }


    public update(quantidade: number, preco: number): void {
      this.carrinho.innerHTML = this.adicionaNoCarrinho(quantidade, preco);
      
      const quantidadeCarrinho = document.getElementById('quantidade') as HTMLInputElement;
      quantidadeCarrinho.value = quantidade.toString()
  }

}