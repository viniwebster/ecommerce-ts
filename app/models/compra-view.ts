export class View {
    
    private addOnCart(quantidade: number, preco: number): string {
        return `
        <li class="lista-item">
          <img class="item-img" src="./images/image-product-1-thumbnail.jpg" alt="Img product">
            <div class="item-desc">
              <p>Fall Limited Edition sneakers</p>
              <span class="value"><span id="preco">${preco} x <span id="qtd">${quantidade}</span></span>   <span class="total">$${(quantidade * preco).toFixed(2)}</span>
            </div>
          <img id="delete" class="btn-delete" src="./images/icon-delete.svg" alt="Remove from cart" onclick="this.parentNode.remove()">
        </li>`
    }


    adicionaNoCarrinho(quantidade: number, valor: number): void {
      const carrinho = document.getElementById('lista') as HTMLElement;
      carrinho.innerHTML += this.addOnCart(quantidade, valor);

      const quantidadeCarrinho = document.getElementById('quantidade') as HTMLInputElement;

      let qtdAtual = quantidadeCarrinho.value;
      let qtd = quantidade + parseInt(qtdAtual);
      let qtdConvertida = qtd.toString()

      quantidadeCarrinho.value = qtdConvertida;
  }

    removeDoCarrinho(): void{
      const quantidade = document.querySelector('#qtd') as HTMLElement;
      const quantidadeCarrinho = document.getElementById('quantidade') as HTMLInputElement;
      
      let qtdCarrinho = quantidadeCarrinho.value;
      let qtdAtual = parseInt(quantidade.innerHTML) - parseInt(qtdCarrinho);
      quantidadeCarrinho.value = qtdAtual.toString();
  }
   
}