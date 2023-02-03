//1)開場文字動畫
let lastPos = 0;
const disappeartitle = document.querySelector(".disappear-title");

document.addEventListener("scroll", function () {
  let currentPos = window.scrollY;

  if (currentPos > 50) {
    disappeartitle.classList.add("h1-disappear"); //讓h1消失
  }
  if (currentPos < 50) {
    disappeartitle.classList.remove("h1-disappear"); //移除使h1消失的css
  }
});
