export function toggleMenuMobile(): void {
    const navContainer = document.querySelector('.nav__container') as HTMLElement;
    const btnMenu = document.getElementById('menu') as HTMLImageElement;

    if (navContainer.style.display == "none") {
        navContainer.style.display = "flex"
        btnMenu.src = "./images/icon-close-black.svg"
    } else {
        navContainer.style.display = "none"
        btnMenu.src = "./images/icon-menu.svg"
    }    
  }