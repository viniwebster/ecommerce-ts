export class View {
    constructor() {
        this.carrinho = document.querySelector('.item-comprado');
    }
    adicionaNoCarrinho(quantidade, preco) {
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
            `;
    }
    update(quantidade, preco) {
        this.carrinho.innerHTML = this.adicionaNoCarrinho(quantidade, preco);
        const quantidadeCarrinho = document.getElementById('quantidade');
        quantidadeCarrinho.value = quantidade.toString();
    }
}
