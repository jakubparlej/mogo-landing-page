const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector(".nav__list");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("icon-cross");
  menu.classList.toggle("active");
});
