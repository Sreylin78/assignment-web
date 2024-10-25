// let loadMore = document.getElementById("load-more");
// let currentItem = 8;

// loadMore.onclick = () => {
//   let boxes = [...document.querySelectorAll("#allmenu .card")];

//   for (var i = currentItem; i < currentItem + 3; i++) {
//     boxes[i].style.display = "inline-block";
//   }
//   currentItem += 4;
//   if (currentItem >= boxes.length) {
//     loadMore.style.display = "none";
//   }
// };

let swiperMenus = new Swiper(".card-content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    600: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 8,
    },
  },
});
