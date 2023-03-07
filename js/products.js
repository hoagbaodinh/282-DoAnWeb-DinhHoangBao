// variables

const cartBtn = document.querySelector(".nav-shop");
const closeCartBtn = document.querySelector(".cart__close");
const clearCartBtn = document.querySelector(".cart__amount-trash");
const cartDOM = document.querySelector(".cart");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart__container");
const productsDOM = document.querySelector(".pd-content");

//cart
let cart = [];

// button
let buttonsDOM = [];

//getting the product
class Products {
  async getProduct() {
    try {
      let result = await fetch("/products.json");
      let data = await result.json();
      let products = data.items;
      products = products.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        const imageHover = item.fields.image.fields.hover.url;
        return { title, price, id, image, imageHover };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

//displaying the product
class UI {
  displayProducts(products) {
    let result = "";
    products.forEach((product) => {
      result += `
      <div class="col-lg-3 col-sm-6 col-12">
      <div class="pd-item">
        <a href="product-ring.html">
          <img
            src=${product.image}
            alt="product"
            class="pd-item-img"
          />
        </a>
        <a href="product-ring.html">
          <h4 class="pd-title">
            ${product.title}
          </h4>
        </a>

        <p class="pd-price">$${product.price}</p>
        <div class="pd-hover">
          <a href="product-ring.html">
            <img
              src= ${product.imageHover}
              alt="pd hover"
              class="pd-hover-img"
              s
            />
          </a>

          <ul class="pd-hover-btns">
            <li>
              <button class="pd-hover-btn bag-btn" data-id=${product.id}>
                <i class="bx bx-shopping-bag"></i>
              </button>
            </li>
            <li>
              <button href="#" class="pd-hover-btn">
                <i class="bx bx-heart"></i>
              </button>
            </li>
            <li>
              <button href="#" class="pd-hover-btn">
                <i class="fa-regular fa-eye"></i>
              </button>
            </li>
            <li>
              <button href="#" class="pd-hover-btn">
                <i class="bx bx-shuffle"></i>
              </button>
            </li>
          </ul>
          <ul class="pd-item-rating">
            <li><i class="fa-solid fa-star star"></i></li>
            <li><i class="fa-solid fa-star star"></i></li>
            <li><i class="fa-solid fa-star star"></i></li>
            <li><i class="fa-solid fa-star star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
          </ul>
        </div>
      </div>
    </div>
            `;
    });
    productsDOM.innerHTML = result;
  }
  getBagButtons() {
    const buttons = [...document.querySelectorAll(".bag-btn")];
    buttonsDOM = buttons;
    buttons.forEach((button) => {
      let id = button.dataset.id;
      let inCart = cart.find((item) => item.id === id);
      if (inCart) {
        button.disabled = true;
      }
      button.addEventListener("click", (event) => {
        event.target.disabled = true;
        //get product from product list
        let cartItem = { ...Storage.getProduct(id), amount: 1 };

        //add product to cart
        cart = [...cart, cartItem];
        // save cart in local storage
        Storage.saveCart(cart);
        // set cart value
        this.setCartValues(cart);
        // display cart item
        this.addCartItem(cartItem);
        // show the cart
        this.showCart();
      });
    });
  }

  setCartValues(cart) {
    let tempTotal = 0;
    let itemsTotal = 0;
    cart.map((item) => {
      tempTotal += item.price * item.amount;
      itemsTotal += item.amount;
    });
    cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
    cartItems.innerText = itemsTotal;
    console.log(cartTotal, cartItems);
  }

  addCartItem(item) {
    const div = document.createElement("div");
    div.classList.add("cart__card");
    div.innerHTML = `
    <div class="cart__box">
    <img src=${item.image} alt="" class="cart__img" />
    </div>

    <div class="cart__details">
    <h3 class="cart__title">${item.title}</h3>
    <span class="cart__price">$${item.price}</span>

    <div class="cart__amount">
      <div class="cart__amount-content">
        <span class="cart__amount-box">
          <i class="bx bx-minus" data-id=${item.id}></i>
        </span>

        <span class="cart__amount-number">${item.amount}</span>

        <span class="cart__amount-box">
          <i class="bx bx-plus" data-id=${item.id}></i>
        </span>
      </div>

      <i class="bx bx-trash-alt cart__amount-trash" data-id=${item.id}></i>
    </div>
  </div>
    `;
    cartContent.appendChild(div);
  }

  showCart() {
    cartDOM.classList.add("show-cart");
  }
  closeCart() {
    cartDOM.classList.remove("show-cart");
  }

  setupApp() {}
}

//local storage
class Storage {
  static saveProduct(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }

  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    return products.find((product) => product.id === id);
  }

  static saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();
  // set up
  ui.setupApp();
  //   get all products
  products
    .getProduct()
    .then((products) => {
      ui.displayProducts(products);
      Storage.saveProduct(products);
    })
    .then(() => {
      ui.getBagButtons();
    });
});
