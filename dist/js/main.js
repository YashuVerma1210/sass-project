const menuBtn = document.querySelector(".menu-btn");
const hamBurger = document.querySelector(".menu-btn-burger");
const nav = document.querySelector(".navigation");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav-item");
let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    hamBurger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));
    showMenu = true;
  } else {
    hamBurger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));
    showMenu = false;
  }
};

menuBtn.addEventListener("click", toggleMenu);
