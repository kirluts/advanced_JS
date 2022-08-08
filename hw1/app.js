const products = [
  {
    id: 1,
    category: 'Ноутбук',
    image: 'images/mack.jpeg',
    model: 'Apple MacBook Air',
    stock: '●  В НАЛИЧИИ',
    review: 234,
    price: 85000,
  },
  {
    id: 2,
    category: 'Планшет',
    image: 'images/ipad.jpeg',
    model: 'iPad mini',
    stock: '●  В НАЛИЧИИ',
    review: 135,
    price: 64000,
  },
  {
    id: 3,
    category: 'Наушники',
    image: 'images/hph.jpg',
    model: 'AirPods Max',
    stock: '●  В НАЛИЧИИ',
    review: 78,
    price: 53000,
  },
  {
    id: 4,
    category: 'Смартфон',
    image: 'images/iphone.jpg',
    model: 'iPhone 13 Pro 64',
    stock: '●  В НАЛИЧИИ',
    review: 454,
    price: 95000,
  },
];

const renderProduct = (category, image, model, stock, review, price) => `
<div class="box">
        <div class="q">
          <img class="img" src="${image}" />
        </div>
        <div class="w">
          <p class="title">${model}</p>
          <p class="description">${category}</p>
          <div class="stars">
            <img class="star" src="images/star.png" alt="" />
            <img class="star" src="images/star.png" alt="" />
            <img class="star" src="images/star.png" alt="" />
            <img class="star" src="images/star.png" alt="" />
            <img class="star" src="images/star.png" alt="" />
            <p class="feedback">${review}</p>
          </div>
          <div class="stock">${stock}</div>
        </div>
        <button class="e">
          <p class="price">${price} ₽</p>
          <span class="material-symbols-outlined"> add</span>
        </button>
      </div>
`;

const renderPage = (list) => {
  const productsList = list.map((item) =>
    renderProduct(
      item.category,
      item.image,
      item.model,
      item.stock,
      item.review,
      item.price
    )
  );
  document.querySelector('.center').innerHTML = productsList.join('');
};

renderPage(products);
