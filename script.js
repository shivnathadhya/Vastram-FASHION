const close = document.querySelector("#close");
const bar = document.querySelector("#bar");
const nav = document.querySelector("#navlist");

const showVerticle = () => {
  console.log("active");
  nav.classList.add("sidebar");
};
const hideVerticle = () => {
  console.log("activeR");
  nav.classList.remove("sidebar");
};

bar.addEventListener("click", showVerticle);
close.addEventListener("click", hideVerticle);
