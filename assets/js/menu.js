// All Menu
let loadMore = document.querySelector(".load-more");
let currentItem = 8;

loadMore.onclick = () => {
  let boxes = [...document.querySelectorAll("#allmenu .card")];

  for (var i = currentItem; i < currentItem + 4; i++) {
    boxes[i].style.display = "flex";
  }
  currentItem += 4;
  if (currentItem >= boxes.length) {
    loadMore.style.display = "none";
  }
};
