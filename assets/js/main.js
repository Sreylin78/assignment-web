// Open and Close nav-menu
const menu = document.getElementById("nav-menu"),
  close = document.getElementById("nav-close"),
  open = document.getElementById("nav-open");

if (open) {
  open.addEventListener("click", () => {
    menu.classList.add("show-menu");
  });
}

if (close) {
  close.addEventListener("click", () => {
    menu.classList.remove("show-menu");
  });
}

// Click nav-link close nav-menu
const links = document.querySelectorAll(".nav-link");

if (links) {
  links.forEach((link) =>
    link.addEventListener("click", () => menu.classList.remove("show-menu"))
  );
}

// Scroll Header Fixed
const header = document.getElementById("header");

if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      header.classList.add("fixed-header");
    } else {
      header.classList.remove("fixed-header");
    }
  });
}

// Scrollup
const scrollup = document.getElementById("scrollup");

if (scrollup) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 180) {
      scrollup.classList.add("show-scrollup");
    } else {
      scrollup.classList.remove("show-scrollup");
    }
  });
}

// Footer Year
const year = document.getElementById("year");

if (year) {
  year.innerHTML = new Date().getFullYear();
}

// AOS Init
AOS.init({
  duration: 1500,
  once: true,
  offset: 100,
});
