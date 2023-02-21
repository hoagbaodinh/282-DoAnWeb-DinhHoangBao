// SHOW CART
const cart = document.getElementById("cart");
const cartToggle = document.getElementById("cart-shop");
const cartClose = document.getElementById("cart-close");

cartToggle.addEventListener("click", () => {
  cart.classList.add("show-cart");
});
cartClose.addEventListener("click", () => {
  cart.classList.remove("show-cart");
});
