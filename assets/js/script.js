const burger = document.querySelector("#burger")
const cross = document.querySelector("#cross")
const header = document.querySelector("header")

burger.addEventListener("click", toggleMenu)
cross.addEventListener("click", toggleMenu)

function toggleMenu() {
    header.classList.toggle("mobile")
}