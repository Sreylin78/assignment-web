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

// scroll shodow-header
const header = document.querySelector(".header");

console.log(header);

window.addEventListener("scroll", () => {
  this.scrollY > 80
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
});

// showi scroll
const scrollup = document.querySelector(".scrollup");

console.log(scrollup);

window.addEventListener("scroll", () => {
  this.scrollY > 150
    ? scrollup.classList.add("show-scroll")
    : scrollup.classList.remove("show-scroll");
});
