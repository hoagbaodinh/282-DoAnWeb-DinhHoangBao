// variables
const products = [
  {
    id: "1",
    title: "18k Rose Gold Diamond Plated Ring",
    cate: "ring",
    image: "./img/pd-1.png",
    imageHover: "./img/pd-hover-1.png",
    price: 599.99,
  },
  {
    id: "2",
    title: "The Loving Heart Pendant",
    cate: "necklace",
    image: "./img/pd-2.png",
    imageHover: "./img/pd-hover-2.png",
    price: 609.99,
  },
  {
    id: "3",
    title: "Dangler Brass Hoop Earring",
    cate: "earring",
    image: "./img/pd-3.png",
    imageHover: "./img/pd-hover-3.png",
    price: 429.99,
  },
  {
    id: "4",
    title: "The Mariatte Hoop Earrings",
    cate: "earring",
    image: "./img/pd-4.png",
    imageHover: "./img/pd-hover-4.png",
    price: 299.99,
  },
  {
    id: "5",
    title: "Melorra The Blind Fold Diamond Earrings",
    cate: "earring",
    image: "./img/pd-5.png",
    imageHover: "./img/pd-hover-5.png",
    price: 199.99,
  },
  {
    id: "6",
    title: "Amethyst Ring For Girls and Women",
    cate: "ring",
    image: "./img/pd-6.png",
    imageHover: "./img/pd-hover-6.png",
    price: 379.99,
  },
  {
    id: "7",
    title: "18k Diamond Rose Gold ring",
    cate: "earring",
    image: "./img/pd-7.png",
    imageHover: "./img/pd-hover-7.png",
    price: 129.99,
  },
  {
    id: "8",
    title: "Drop Earrings for Women",
    cate: "earring",
    image: "./img/pd-8.png",
    imageHover: "./img/pd-hover-8.png",
    price: 589.99,
  },
];
const cartBtn = document.querySelector(".nav-shop");
const closeCartBtn = document.querySelector(".cart__close");
const clearCartBtn = document.querySelector(".cart__amount-trash");
const cartItemNumber = document.querySelector(".cart__amount-number");

const cartDOM = document.querySelector(".cart");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart__container");
const productsDOM = document.querySelector(".pd-content");
const cateDOM = document.querySelector(".cate-sidebar-item-list");

let filteredProducts = [...products];

//cart
let cart = [];

// button
let buttonsDOM = [];

// getting the product
class Products {
  async getProduct() {
    try {
      // let result = await fetch("./public/products.json");
      // let data = await result.json();
      // let products = data.items;
      // products = products.map((item) => {
      //   const { title, price } = item.fields;
      //   const { id } = item.sys;
      //   const image = item.fields.image.fields.file.url;
      //   const imageHover = item.fields.image.fields.hover.url;
      //   return { title, price, id, image, imageHover };
      // });
      return filteredProducts;
    } catch (error) {
      console.log(error);
    }
  }
}

// const displayProducts = (products) => {
//   productsDOM.innerHTML = products
//     .map((product) => {
//       const { id, title, cate, image, imageHover, price } = product;
//       return `
//       <div class="col-lg-3 col-sm-6 col-12">
//       <div class="pd-item">
//         <a href="product-ring.html">
//           <img
//             src=${image}
//             alt="product"
//             class="pd-item-img"
//           />
//         </a>
//         <a href="product-ring.html">
//           <h4 class="pd-title">
//             ${title}
//           </h4>
//         </a>

//         <p class="pd-price">$${price}</p>
//         <div class="pd-hover">
//           <a href="product-ring.html">
//             <img
//               src= ${imageHover}
//               alt="pd hover"
//               class="pd-hover-img"

//             />
//           </a>

//           <ul class="pd-hover-btns">
//             <li>
//               <button class="pd-hover-btn bag-btn" data-id=${id}>
//                 <i class="bx bx-shopping-bag"></i>
//               </button>
//             </li>
//             <li>
//               <button href="#" class="pd-hover-btn">
//                 <i class="bx bx-heart"></i>
//               </button>
//             </li>
//             <li>
//               <button href="#" class="pd-hover-btn">
//                 <i class="fa-regular fa-eye"></i>
//               </button>
//             </li>
//             <li>
//               <button href="#" class="pd-hover-btn">
//                 <i class="bx bx-shuffle"></i>
//               </button>
//             </li>
//           </ul>
//           <ul class="pd-item-rating">
//             <li><i class="fa-solid fa-star star"></i></li>
//             <li><i class="fa-solid fa-star star"></i></li>
//             <li><i class="fa-solid fa-star star"></i></li>
//             <li><i class="fa-solid fa-star star"></i></li>
//             <li><i class="fa-solid fa-star"></i></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//             `;
//     })
//     .join("");
// };
// const displaySidebarProduct = (products) => {
//   if (document.querySelector(".sidebar-pd-list")) {
//     const sidebarProductDOMs = document.querySelector(".sidebar-pd-list");

//     sidebarProductDOMs.innerHTML = products
//       .map((product) => {
//         const { id, title, cate, image, imageHover, price } = product;
//         return `
//       <div class="swiper-slide sidebar-pd-item">
//         <img src=${image} alt="" />
//         <div>
//           <h4>${title}</h4>
//           <p>$${price}</p>
//         </div>
//     </div>
//       `;
//       })
//       .join("");
//   }
// };
// const dpListViewPd = (products) => {
//   if (document.querySelector(".list-view-pd-content")) {
//     const listViewProductDOMs = document.querySelector(".list-view-pd-content");

//     listViewProductDOMs.innerHTML = products
//       .map((product) => {
//         const { id, title, cate, image, imageHover, price } = product;
//         return `
//         <div class="col-12">
//         <div class="list-view-pd-item row">
//           <div class="col-md-4 position-relative">
//             <a href="product-ring.html" class="d-block">
//               <img
//                 src=${image}
//                 alt=""
//                 class="pd-item-img"
//               />
//             </a>
//             <div class="pd-hover">
//               <a href="product-ring.html">
//                 <img
//                   src=${imageHover}
//                   alt="pd hover"
//                   class="pd-hover-img"
//                 />
//               </a>
//               <ul class="pd-hover-btns">
//                 <li>
//                   <button class="pd-hover-btn bag-btn" data-id=${id}>
//                     <i class="bx bx-shopping-bag"></i>
//                   </button>
//                 </li>
//                 <li>
//                   <a href="#" class="pd-hover-btn">
//                     <i class="bx bx-heart"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" class="pd-hover-btn">
//                     <i class="fa-regular fa-eye"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" class="pd-hover-btn">
//                     <i class="bx bx-shuffle"></i>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div class="col-md-8">
//             <div class="list-view-pd-desc">
//               <a href="product-ring.html">
//                 <h2 class="pd-title">
//                   ${title}
//                 </h2>
//               </a>
//               <ul class="pd-item-rating">
//                 <li><i class="fa-solid fa-star star"></i></li>
//                 <li><i class="fa-solid fa-star star"></i></li>
//                 <li><i class="fa-solid fa-star star"></i></li>
//                 <li><i class="fa-solid fa-star star"></i></li>
//                 <li><i class="fa-solid fa-star"></i></li>
//               </ul>
//               <p class="pd-price">$${price}</p>
//               <p class="pd-text">
//                 All the Lorem Ipsum generators on the Internet
//                 tend to repeat predefined chunks as necessary,
//                 making this the first true generator on the
//                 Internet.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//         `;
//       })
//       .join("");
//   }
// };

//displaying the product
class UI {
  displayProducts(products) {
    if (productsDOM) {
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
  }
  displaySidebarProduct(products) {
    if (document.querySelector(".sidebar-pd-list")) {
      const sidebarProductDOMs = document.querySelector(".sidebar-pd-list");
      let result = "";
      products.forEach((product) => {
        result += `
        <div class="swiper-slide sidebar-pd-item">
          <img src=${product.image} alt="" />
          <div>
            <h4>${product.title}</h4>
            <p>$${product.price}</p>
          </div>
      </div>
        `;
      });
      sidebarProductDOMs.innerHTML = result;
    }
  }
  dpListViewPd(products) {
    if (document.querySelector(".list-view-pd-content")) {
      const listViewProductDOMs = document.querySelector(
        ".list-view-pd-content"
      );
      let result = "";
      products.forEach((product) => {
        result += `
        <div class="col-12">
        <div class="list-view-pd-item row">
          <div class="col-md-4 position-relative">
            <a href="product-ring.html" class="d-block">
              <img
                src=${product.image}
                alt=""
                class="pd-item-img"
              />
            </a>
            <div class="pd-hover">
              <a href="product-ring.html">
                <img
                  src=${product.imageHover}
                  alt="pd hover"
                  class="pd-hover-img"
                />
              </a>
              <ul class="pd-hover-btns">
                <li>
                  <button class="pd-hover-btn bag-btn" data-id=${product.id}>
                  </button>
                </li>
                <li>
                  <a href="#" class="pd-hover-btn">
                    <i class="bx bx-heart"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="pd-hover-btn">
                    <i class="fa-regular fa-eye"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="pd-hover-btn">
                    <i class="bx bx-shuffle"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-8">
            <div class="list-view-pd-desc">
              <a href="product-ring.html">
                <h2 class="pd-title">
                  ${product.title}
                </h2>
              </a>
              <ul class="pd-item-rating">
                <li><i class="fa-solid fa-star star"></i></li>
                <li><i class="fa-solid fa-star star"></i></li>
                <li><i class="fa-solid fa-star star"></i></li>
                <li><i class="fa-solid fa-star star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
              </ul>
              <p class="pd-price">$${product.price}</p>
              <p class="pd-text">
                All the Lorem Ipsum generators on the Internet
                tend to repeat predefined chunks as necessary,
                making this the first true generator on the
                Internet.
              </p>
            </div>
          </div>
        </div>
      </div>
        `;
      });
      listViewProductDOMs.innerHTML = result;
    }
  }
  displayCateButton() {
    const buttons = [
      "all",
      ...new Set(products.map((product) => product.cate)),
    ];
    if (cateDOM) {
      cateDOM.innerHTML = buttons
        .map((cate) => {
          return `
        <li>
          <button class="cate-sidebar-item-link" data-id="${cate}">
            ${cate} 
          </button>
        </li>
        `;
        })
        .join("");

      cateDOM.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains("cate-sidebar-item-link")) {
          if (el.dataset.id === "all") {
            filteredProducts = [...products];
          } else {
            filteredProducts = products.filter((product) => {
              return product.cate === el.dataset.id;
            });
          }
          displayProducts(filteredProducts);
          dpListViewPd(filteredProducts);
        }
      });
    }
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
    if (cartTotal && cartItems) {
      let tempTotal = 0;
      let itemsTotal = 0;
      cart.map((item) => {
        tempTotal += item.price * item.amount;
        itemsTotal += item.amount;
      });
      cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
      cartItems.innerText = itemsTotal;
    }
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
        <i class="bx bx-minus cart__amount-box cart-minus " data-id=${item.id} ></i>
        <span class="cart__amount-number">${item.amount}</span>
        <i class="bx bx-plus cart__amount-box cart-plus" data-id=${item.id} ></i>
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

  hideCart() {
    cartDOM.classList.remove("show-cart");
  }

  setupAPP() {
    cart = Storage.getCart();
    this.setCartValues(cart);
    this.populate(cart);
    cartBtn.addEventListener("click", this.showCart);
    closeCartBtn.addEventListener("click", this.hideCart);
  }

  populate(cart) {
    cart.forEach((item) => {
      this.addCartItem(item);
    });
  }

  cartLogic() {
    cartContent.addEventListener("click", (event) => {
      console.log(event.target);
      if (event.target.classList.contains("cart__amount-trash")) {
        let removeItem = event.target;
        let id = removeItem.dataset.id;
        cartContent.removeChild(
          removeItem.parentElement.parentElement.parentElement
        );
        this.removeItem(id);
      } else if (event.target.classList.contains("cart-plus")) {
        let addAmount = event.target;
        let id = addAmount.dataset.id;
        let tempItem = cart.find((item) => item.id === id);
        tempItem.amount += 1;
        Storage.saveCart(cart);
        this.setCartValues(cart);
        addAmount.previousElementSibling.innerText = tempItem.amount;
      } else if (event.target.classList.contains("cart-minus")) {
        let lowerAmount = event.target;
        let id = lowerAmount.dataset.id;
        let tempItem = cart.find((item) => item.id === id);
        tempItem.amount -= 1;
        if (tempItem.amount > 0) {
          Storage.saveCart(cart);
          this.setCartValues(cart);
          lowerAmount.nextElementSibling.innerText = tempItem.amount;
        } else {
          cartContent.removeChild(
            lowerAmount.parentElement.parentElement.parentElement.parentElement
          );
          this.removeItem(id);
        }
      }
    });
  }

  clearCart() {
    let cartItems = cart.map((item) => item.id);
    cartItems.forEach((id) => this.removeItem(id));
    while (cartContent.children.length > 0)
      cartContent.removeChild(cartContent.children[0]);
    this.hideCart();
  }

  removeItem(id) {
    cart = cart.filter((item) => item.id !== id);
    this.setCartValues(cart);
    Storage.saveCart(cart);

    let button = this.getSingleButton(id);
    button.disabled = false;
  }

  getSingleButton(id) {
    return buttonsDOM.find((button) => button.dataset.id === id);
  }
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

  static getCart() {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const allProducts = new Products();
  // set up
  ui.setupAPP();
  //   get all products
  allProducts
    .getProduct()
    .then((products) => {
      ui.displaySidebarProduct(products);
      ui.displayProducts(products);
      ui.dpListViewPd(products);
      ui.displayCateButton();
      Storage.saveProduct(products);
    })
    .then(() => {
      ui.getBagButtons();
      ui.cartLogic();
    });
  if (cateDOM) {
    cateDOM.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("cate-sidebar-item-link")) {
        if (el.dataset.id === "all") {
          filteredProducts = [...products];
        } else {
          filteredProducts = products.filter((product) => {
            return product.cate === el.dataset.id;
          });
        }
        ui.displayProducts(filteredProducts);
        ui.dpListViewPd(filteredProducts);
      }
    });
  }
});
