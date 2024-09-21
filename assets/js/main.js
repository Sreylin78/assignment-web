// show and hide header
const navMenu = document.querySelector(".nav-menu");
const navClose = document.querySelector(".nav-close");
const navToggle = document.querySelector(".nav-toggle");

console.log(navMenu, navToggle, navClose);

const toggleMenu = () => {
  navMenu.classList.toggle("show-menu");
};

if (navToggle) {
  navToggle.addEventListener("click", toggleMenu);
}