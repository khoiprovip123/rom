const menuIcon = document.querySelector(".menu-btn");
const closeIcon = document.querySelector(".close-btn");
const menuMobile = document.querySelector(".menu-moblie");
const menuMobileCon = document.querySelector(".content-menu");

const showMenu = () => menuMobile.classList.add("show-menu");
const hideMenu = () => menuMobile.classList.remove("show-menu");
const stopPropagation = (e) => e.stopPropagation();

menuIcon.addEventListener("click", showMenu);

closeIcon.addEventListener("click", hideMenu);

menuMobile.addEventListener("click", hideMenu);

menuMobileCon.addEventListener("click", stopPropagation);