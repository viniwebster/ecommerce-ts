export function toggleMenuMobile() {
    const navContainer = document.querySelector('.nav__container');
    const btnMenu = document.getElementById('menu');
    if (navContainer.style.display == "none") {
        navContainer.style.display = "flex";
        btnMenu.src = "./images/icon-close-black.svg";
    }
    else {
        navContainer.style.display = "none";
        btnMenu.src = "./images/icon-menu.svg";
    }
}
