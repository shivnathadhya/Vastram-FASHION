//main sidebar
const close = document.querySelector("#close");
const bar = document.querySelector("#bar");
const nav = document.querySelector("#navlist");

const toggleSideBar = () => {
  nav.classList.toggle("sidebar");
};

bar.addEventListener("click", toggleSideBar);
close.addEventListener("click", toggleSideBar);

//sproduct image scroll
const mainImg = document.querySelector("#mainImg"),
  smallImg = document.querySelectorAll(".small-img");

smallImg.forEach((img) => {
  img.addEventListener("click", () => {
    let temp = mainImg.src;
    mainImg.src = img.src;
    img.src = temp;
  });
});

//shop redirect

const products = document.querySelectorAll(".pro");

products.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("clicked");
    window.location.href = "sproduct.html";
  });
});

