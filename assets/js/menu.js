const initializeSwiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: true,
  },
  breakpoints: {
    768: {
      spaceBetween: 30,
      pagination: false,
    },
    1200: {
      spaceBetween: 40,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
  },
});

const swiperContainer = document.querySelector(".swiper-container");
swiperContainer.addEventListener("mouseenter", () => {
  allMenu.autoplay.stop();
});
swiperContainer.addEventListener("mouseleave", () => {
  allMenu.autoplay.start();
});

const allMenu = new Swiper(".allmenu-container", {
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: true,
  slidesPerGroup: 2,
  loop: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: true,
  },
  breakpoints: {
    768: {
      spaceBetween: 30,
      pagination: false,
    },
    1200: {
      spaceBetween: 40,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
  },
});

const allmenuContainer = document.querySelector(".allmenu-container");
allmenuContainer.addEventListener("mouseenter", () => {
  allMenu.autoplay.stop();
});
allmenuContainer.addEventListener("mouseleave", () => {
  allMenu.autoplay.start();
});
