const templates = [...document.querySelectorAll(`template`)];
const mainCentral = document.querySelector(`.central`);

const keyRight = 39;
const keyLeft = 37;

let i = 0;

const renderScreen = function (n) {
  mainCentral.innerHTML = templates[n].innerHTML;
};

renderScreen(i);

document.addEventListener(`keydown`, function (e) {
  if (e.altKey && e.keyCode === keyRight && i < templates.length - 1) {
    renderScreen(++i);
  }
  if (e.altKey && e.keyCode === keyLeft && i > 0) {
    renderScreen(i--);
  }
});
