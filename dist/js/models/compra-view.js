export class View {
    addOnCart(quantidade, preco) {
        return `
        <li class="lista-item">
          <img class="item-img" src="./images/image-product-1-thumbnail.jpg" alt="Img product">
            <div class="item-desc">
              <p>Fall Limited Edition sneakers</p>
              <span class="value"><span id="preco">${preco} x <span id="qtd">${quantidade}</span></span>   <span class="total">$${(quantidade * preco).toFixed(2)}</span>
            </div>
          <img id="delete" class="btn-delete" src="./images/icon-delete.svg" alt="Remove from cart" onclick="this.parentNode.remove()">
        </li>`;
    }
    adicionaNoCarrinho(quantidade, valor) {
        const carrinho = document.getElementById('lista');
        carrinho.innerHTML += this.addOnCart(quantidade, valor);
        const quantidadeCarrinho = document.getElementById('quantidade');
        let qtdAtual = quantidadeCarrinho.value;
        let qtd = quantidade + parseInt(qtdAtual);
        let qtdConvertida = qtd.toString();
        quantidadeCarrinho.value = qtdConvertida;
    }
    removeDoCarrinho() {
        const quantidade = document.querySelector('#qtd');
        const quantidadeCarrinho = document.getElementById('quantidade');
        let qtdCarrinho = quantidadeCarrinho.value;
        let qtdAtual = parseInt(quantidade.innerHTML) - parseInt(qtdCarrinho);
        quantidadeCarrinho.value = qtdAtual.toString();
    }
}
