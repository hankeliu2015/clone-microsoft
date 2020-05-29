const mainMenu = document.querySelector("ul.main-menu");
const hamburgerButton = document.querySelector(".menu-btn");

function showMenu(e) {
  mainMenu.classList.toggle("show");
}

hamburgerButton.addEventListener("click", showMenu);
