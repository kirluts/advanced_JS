class ProductsItem {
  constructor(image, model, category, review, stock, price) {
    this.image = image;
    this.model = model;
    this.category = category;
    this.review = review;
    this.stock = stock;
    this.price = price;
  }
  render() {
    return `<div class="box">
    <div class="q">
      <img class="img" src="${this.image}" />
    </div>
    <div class="w">
      <p class="title">${this.model}</p>
      <p class="description">${this.category}</p>
      <div class="stars">
        <img class="star" src="images/star.png" alt="" />
        <img class="star" src="images/star.png" alt="" />
        <img class="star" src="images/star.png" alt="" />
        <img class="star" src="images/star.png" alt="" />
        <img class="star" src="images/star.png" alt="" />
        <p class="feedback">${this.review}</p>
      </div>
      <div class="stock">${this.stock}</div>
    </div>
    <button class="e">
      <p class="price">${this.price} ₽</p>
      <span class="material-symbols-outlined"> add</span>
    </button>
  </div>`;
  }
}
class ProductsList {
  constructor() {
    this.products = [];
  }
  fetchProducts() {
    this.products = [
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
  }
  render() {
    let listHtml = '';
    this.products.forEach((product) => {
      const productItem = new ProductsItem(
        product.image,
        product.model,
        product.category,
        product.review,
        product.stock,
        product.price
      );
      listHtml += productItem.render();
    });
    document.querySelector('.center').innerHTML = listHtml;
  }
}

const list = new ProductsList();
list.fetchProducts();
list.render();
