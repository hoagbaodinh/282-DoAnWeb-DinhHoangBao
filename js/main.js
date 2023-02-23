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
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  if (scrollY >= 40) {
    header.classList.add("scroll-header");
  } else header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);
/*=============== SHOW MENU ===============*/
const navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  navMenu = document.querySelector(".nav-menu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// TIMER
function makeTimer() {
  var endTime = new Date("31 March 2023 23:59:59 GMT+07:00");
  endTime = Date.parse(endTime) / 1000;

  var now = new Date();
  now = Date.parse(now) / 1000;

  var timeLeft = endTime - now;

  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - days * 86400) / 3600);
  var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(
    timeLeft - days * 86400 - hours * 3600 - minutes * 60
  );

  if (hours < "10") {
    hours = "0" + hours;
  }
  if (minutes < "10") {
    minutes = "0" + minutes;
  }
  if (seconds < "10") {
    seconds = "0" + seconds;
  }

  $(".days").html(days + " <span>:</span>");
  $(".hours").html(hours + " <span>:</span>");
  $(".minutes").html(minutes + "  <span>:</span>");
  $(".seconds").html(seconds);
}
setInterval(function () {
  makeTimer();
}, 1000);
