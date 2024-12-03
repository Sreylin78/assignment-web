const allMenu = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  breakpoints: {
    768: {
      spaceBetween: 30,
    },
    1200: {
      spaceBetween: 40,
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
