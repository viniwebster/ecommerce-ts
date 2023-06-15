export function viewModal(img) {
    return `
    <div class="modal-container">
      <div class="img__primary">
        <img class="close" id="close" src="./images/icon-close.svg" alt="Close modal" onclick="this.parentNode.parentNode.remove()">
        <div class="img_container">    
          <img src="${img}" alt="imagem do produto">
        </div>  
      </div>      
    </div>
    `;
}
