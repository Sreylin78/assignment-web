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

if (navClose) {
  navClose.addEventListener("click", toggleMenu);
}

// Click on nav-link close nav-menu on mobile
const links = document.querySelectorAll(".nav-link");

console.log(links);

links.forEach((n) => n.addEventListener("click", toggleMenu));
