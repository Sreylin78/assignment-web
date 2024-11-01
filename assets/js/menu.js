// Render popular menu Cards
const popularItems = [
  {
    image: "../assets/image/menu/menu-2.jpg",
    title: "ខ្យងផ្លិតឆាម្រេចខ្ទី",
    description: "Description for ខ្យងផ្លិតឆាម្រេចខ្ទី",
    price: "៥០.០០០៛",
    stars: 4,
  },
  {
    image: "../assets/image/menu/menu-8.jpg",
    title: "ស្ងោរជ្រក់បង្កង",
    description: "Description for ស្ងោរជ្រក់បង្កង",
    price: "១៦០.០០០៛",
    stars: 4,
  },
  {
    image: "../assets/image/menu/menu-14.jpg",
    title: "បាយឆាគ្រឿងសមុទ្រ",
    description: "Description for បាយឆាគ្រឿងសមុទ្រ",
    price: "៦៣.០០០៛",
    stars: 4,
  },
  {
    image: "../assets/image/menu/menu-16.jpg",
    title: "ប្រហុកខ្ទិះ",
    description: "Description for ប្រហុកខ្ទិះ",
    price: "៥៤,០០០៛",
    stars: 3.5,
  },
];

const popularMenu = document.getElementById("pupularContainer");

popularItems.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <img src="${item.image}" alt="Menu Image" />
  <div class="info">
    <h2>${item.title}</h2>
    <p>${item.description}</p>
    <div class="stars">
      ${'<i class="ri-star-fill"></i>'.repeat(Math.floor(item.stars))}${
    item.stars % 1 ? '<i class="ri-star-half-line"></i>' : ""
  }${'<i class="ri-star-line"></i>'.repeat(5 - Math.ceil(item.stars))}
    </div>
  </div>
  <div class="action">
    <span>តម្លៃ <b>${item.price}</b></span>
  </div>
`;
  popularMenu.appendChild(card);
});

// Render newmenu Cards
const newItems = [
  {
    image: "../assets/image/menu/menu-1.jpg",
    title: "សាច់គោអាំងចង្កាក់",
    description: "Description for សាច់គោអាំងចង្កាក់",
    price: "៦៣.០០០៛",
    stars: 4,
  },
  {
    image: "../assets/image/menu/menu-2.jpg",
    title: "ខ្យងផ្លិតឆាម្រេចខ្ទី",
    description: "Description for ខ្យងផ្លិតឆាម្រេចខ្ទី",
    price: "៥០.០០០៛",
    stars: 4,
  },
  {
    image: "../assets/image/menu/menu-3.jpg",
    title: "សាច់ក្កកតាកែវ",
    description: "Description for សាច់ក្កកតាកែវ",
    price: "៤៦.០០០៛",
    stars: 3.5,
  },
  {
    image: "../assets/image/menu/menu-4.jpg",
    title: "ម៉ុកមី",
    description: "Description for ម៉ុកមី",
    price: "៤៦.០០០៛",
    stars: 4,
  },
];

const newMenu = document.getElementById("newContainer");

newItems.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <img src="${item.image}" alt="Menu Image" />
  <div class="info">
    <h2>${item.title}</h2>
    <p>${item.description}</p>
    <div class="stars">
      ${'<i class="ri-star-fill"></i>'.repeat(Math.floor(item.stars))}${
    item.stars % 1 ? '<i class="ri-star-half-line"></i>' : ""
  }${'<i class="ri-star-line"></i>'.repeat(5 - Math.ceil(item.stars))}
    </div>
  </div>
  <div class="action">
    <span>តម្លៃ <b>${item.price}</b></span>
  </div>
`;
  newMenu.appendChild(card);
});

// Render allmenu Cards
const allMenuItems = [
  {
    image: "../assets/image/menu/menu-1.jpg",
    title: "សាច់គោអាំងចង្កាក់",
    description: "Description for សាច់គោអាំងចង្កាក់",
    price: "៦៣.០០០៛",
    stars: 4,
  },
  {
    image: "../assets/image/menu/menu-2.jpg",
    title: "ខ្យងផ្លិតឆាម្រេចខ្ទី",
    description: "Description for ខ្យងផ្លិតឆាម្រេចខ្ទី",
    price: "៥០.០០០៛",
    stars: 4,
  },
  {
    image: "../assets/image/menu/menu-3.jpg",
    title: "សាច់ក្កកតាកែវ",
    description: "Description for សាច់ក្កកតាកែវ",
    price: "៤៦.០០០៛",
    stars: 3.5,
  },
  {
    image: "../assets/image/menu/menu-4.jpg",
    title: "ម៉ុកមី",
    description: "Description for ម៉ុកមី",
    price: "៤៦.០០០៛",
    stars: 4,
  },
  {
    image: "../assets/image/menu/menu-5.jpg",
    title: "ភ្លាគ្រឿងសមុទ្រជាមួយផ្លែប៊ឺរ",
    description: "Description for ភ្លាគ្រឿងសមុទ្រជាមួយផ្លែប៊ឺរ",
    price: "៦៣.០០០៛",
    stars: 4,
  },
  {
    image: "../assets/image/menu/menu-6.jpg",
    title: "ភ្លាសាច់គោ",
    description: "Description for ភ្លាសាច់គោ",
    price: "៤៦.០០០៛",
    stars: 3,
  },
  {
    image: "../assets/image/menu/menu-7.jpg",
    title: "ញាំសាច់មាន់ជាមួយត្រយ៉ូងចេក",
    description: "Description for ញាំសាច់មាន់ជាមួយត្រយ៉ូងចេក",
    price: "២៩.០០០៛",
    stars: 4,
  },
  {
    image: "../assets/image/menu/menu-8.jpg",
    title: "ស្ងោរជ្រក់បង្កង",
    description: "Description for ស្ងោរជ្រក់បង្កង",
    price: "១៦០.០០០៛",
    stars: 4,
  },
  {
    image: "../assets/image/menu/menu-9.jpg",
    title: "សម្លម្ជូរខ្ទិះគ្រឿងសមុទ្រ",
    description: "Description for សម្លម្ជូរខ្ទិះគ្រឿងសមុទ្រ",
    price: "៧១.០០០៛",
    stars: 3.5,
  },
  {
    image: "../assets/image/menu/menu-10.jpg",
    title: "សម្លកកូរ",
    description: "Description for សម្លកកូរ",
    price: "៤៦.០០០៛",
    stars: 4,
  },
  {
    image: "../assets/image/menu/menu-11.jpg",
    title: "បាយឆាម្មាស់",
    description: "Description for បាយឆាម្មាស់",
    price: "៤២.០០០៛",
    stars: 4,
  },
  {
    image: "../assets/image/menu/menu-12.jpg",
    title: "បាយការីសាច់មាន់ខ្ចប់ស្លឹកឈូក",
    description: "Description for បាយការីសាច់មាន់ខ្ចប់ស្លឹកឈូក",
    price: "៥៤.០០០៛",
    stars: 3,
  },
  {
    image: "../assets/image/menu/menu-13.jpg",
    title: "បាយឆាបង្កង",
    description: "Description for បាយឆាបង្កង",
    price: "១៦០.០០០៛",
    stars: 4,
  },
  {
    image: "../assets/image/menu/menu-14.jpg",
    title: "បាយឆាគ្រឿងសមុទ្រ",
    description: "Description for បាយឆាគ្រឿងសមុទ្រ",
    price: "៦៣.០០០៛",
    stars: 4,
  },
  {
    image: "../assets/image/menu/menu-15.jpg",
    title: "ឆាខ្ញីសាច់មាន់",
    description: "Description for ឆាខ្ញីសាច់មាន់",
    price: "៨៤.០០០៛",
    stars: 4,
  },
  {
    image: "../assets/image/menu/menu-16.jpg",
    title: "ប្រហុកខ្ទិះ",
    description: "Description for ប្រហុកខ្ទិះ",
    price: "៥៤,០០០៛",
    stars: 3.5,
  },
  {
    image: "../assets/image/menu/menu-17.jpg",
    title: "សាច់គោអាំងទឹកម្រិច",
    description: "Description for សាច់គោអាំងទឹកម្រិច",
    price: "៧៥.០០០៛",
    stars: 4,
  },
  {
    image: "../assets/image/menu/menu-18.jpg",
    title: "ទាអាំង",
    description: "Description for ទាអាំង",
    price: "៨៤.០០០៛",
    stars: 4,
  },
  {
    image: "../assets/image/menu/menu-19.jpg",
    title: "ត្រីដុតអំបិល",
    description: "Description for ត្រីដុតអំបិល",
    price: "១៦០.០០០៛",
    stars: 3,
  },
  {
    image: "../assets/image/menu/menu-20.jpg",
    title: "មាន់អាំងទឹកម្រិច",
    description: "Description for មាន់អាំងទឹកម្រិច",
    price: "៧៥.០០០៛",
    stars: 4,
  },
];

const allMenuContainer = document.getElementById("allContainer");

allMenuItems.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <img src="${item.image}" alt="Menu Image" />
  <div class="info">
    <h2>${item.title}</h2>
    <p>${item.description}</p>
    <div class="stars">
      ${'<i class="ri-star-fill"></i>'.repeat(Math.floor(item.stars))}${
    item.stars % 1 ? '<i class="ri-star-half-line"></i>' : ""
  }${'<i class="ri-star-line"></i>'.repeat(5 - Math.ceil(item.stars))}
    </div>
  </div>
  <div class="action">
    <span>តម្លៃ <b>${item.price}</b></span>
  </div>
`;
  allMenuContainer.appendChild(card);
});

// Load More Menu Card
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