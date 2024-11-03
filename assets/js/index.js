const popularItems = [
  {
    id: 2,
    image: "../assets/image/menu/menu-2.jpg",
    title: "ខ្យងផ្លិតឆាម្រេចខ្ទី",
    description: "Description for ខ្យងផ្លិតឆាម្រេចខ្ទី",
    price: "៥០.០០០៛",
    stars: 4,
  },
  {
    id: 8,
    image: "../assets/image/menu/menu-8.jpg",
    title: "ស្ងោរជ្រក់បង្កង",
    description: "Description for ស្ងោរជ្រក់បង្កង",
    price: "១៦០.០០០៛",
    stars: 4,
  },
  {
    id: 14,
    image: "../assets/image/menu/menu-14.jpg",
    title: "បាយឆាគ្រឿងសមុទ្រ",
    description: "Description for បាយឆាគ្រឿងសមុទ្រ",
    price: "៦៣.០០០៛",
    stars: 4,
  },
  {
    id: 16,
    image: "../assets/image/menu/menu-16.jpg",
    title: "ប្រហុកខ្ទិះ",
    description: "Description for ប្រហុកខ្ទិះ",
    price: "៥៤,០០០៛",
    stars: 3.5,
  },
];

const popularMenu = document.getElementById("menuContainer");

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
      <span id="add-cart" item-id=${
        item.id
      }> <i class="ri-shopping-bag-line"></i> </span>
    </div>
  `;
  popularMenu.appendChild(card);
});
