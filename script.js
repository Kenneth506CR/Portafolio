
const toggleMenuElement = document.getElementById("toggle__menu");
const mainMenuElement = document.getElementById("main__menu");

toggleMenuElement.addEventListener("click", () =>{
    mainMenuElement.classList.toggle("main__menu__show");
})