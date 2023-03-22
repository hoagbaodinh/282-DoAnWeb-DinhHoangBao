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

/*=============== SHOW ACCORDION ===============*/
const accBtns = document.querySelectorAll(".accordion-btn"),
  accList = document.querySelectorAll(".footer-menu");

accBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    accList[index].classList.toggle("show-accordion");
    btn.classList.toggle("accordion-active");
  });
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  if (this.scrollY >= 500) scrollUp.classList.add("show-scrollup");
  else scrollUp.classList.remove("show-scrollup");
};
window.addEventListener("scroll", scrollUp);

/*=============== COLOR PICKED ===============*/
const colorBtns = document.querySelectorAll(".pd-details-option-color");

colorBtns.forEach((color) => {
  color.addEventListener("click", () => {
    for (let i = 0; i < colorBtns.length; i++) {
      if (colorBtns[i].parentElement.classList.contains("color-picked")) {
        colorBtns[i].parentElement.classList.remove("color-picked");
      }
    }
    color.parentElement.classList.toggle("color-picked");
  });
});

/*=============== COUNTER ===============*/
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const number = document.querySelector(".quantity-input");

if (plus && minus && number) {
  let value = number.value;
  plus.addEventListener("click", () => {
    value++;
    number.setAttribute("value", value);
  });

  minus.addEventListener("click", () => {
    if (value > 1) value--;
    number.setAttribute("value", value);
  });
}
/*=============== ABOUT US COUNTER ===============*/
const dataNumbers = document.querySelectorAll(".achievement-data-number");
const interval = 5000;

if (dataNumbers) {
  dataNumbers.forEach((number) => {
    let startValue = 0;
    let endValue = parseInt(number.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {
      startValue += 1;
      number.textContent = startValue;
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
}
/*=============== SHOW SIDEBAR ===============*/
const sidebarBtn = document.querySelector(".sidebar-btn");
const sidebar = document.querySelector(".cate-sidebar");
const closeSidebarBtn = document.querySelector(".sidebar-close-btn");
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
  });
}

if (closeSidebarBtn) {
  closeSidebarBtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
  });
}
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const logo = document.querySelector(".nav-logo");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";
const logoTheme = "nav-logo-invert";

//Check if user already choose theme or not
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");
const selectedLogo = localStorage.getItem("selected-logo");

// We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () =>{
//   if(document.body.classList.contains(darkTheme)){
//     return 'dark'
//   }else return 'light'
// }

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";
const getCurrentLogo = () =>
  logo.classList.contains(logoTheme) ? "nav-logo" : "nav-logo-invert";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
  logo.classList[selectedLogo === "nav-logo" ? "add" : "remove"](logoTheme);
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  logo.classList.toggle(logoTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
  localStorage.setItem("selected-logo", getCurrentLogo());
});
