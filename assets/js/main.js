// Open and Close nav-menu
const menu = document.getElementById("nav-menu"),
  close = document.getElementById("nav-close"),
  toggle = document.getElementById("nav-toggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    menu.classList.add("show-menu");
  });
}

if (close) {
  close.addEventListener("click", () => {
    menu.classList.remove("show-menu");
  });
}

// Scroll Header Fixed
const header = document.getElementById("header");

if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 250) {
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
    if (window.scrollY >= 500) {
      scrollup.classList.add("show-scrollup");
    } else {
      scrollup.classList.remove("show-scrollup");
    }
  });
}

// Year Footer
const yearFooter = document.getElementById("year");

if (yearFooter) {
  yearFooter.textContent = new Date().getFullYear();
}
