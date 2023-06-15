export class Tenis {
    addOnCart(value, qtd) {
        return `
        <li class="lista-item">
          <img class="item-img" src="./images/image-product-1-thumbnail.jpg" alt="Img product">
            <div class="item-desc">
              <p>Fall Limited Edition sneakers</p>
              <span class="value">${value} x ${qtd}</span>   <span class="total">$${(parseFloat(value) * parseFloat(qtd)).toFixed(2)}</span>
            </div>
          <img id="delete" class="btn-delete" src="./images/icon-delete.svg" alt="Remove from cart" onclick="this.parentNode.remove()">
        </li>`;
    }
    qtdCart(qtd) {
        const qtdCart = document.getElementById('quantidade');
        qtdCart.value = parseFloat(qtdCart.value) + qtd;
    }
}
