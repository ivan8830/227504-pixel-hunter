
const templates = [...document.querySelectorAll(`template`)];
let i = 0;

const keyRight = 39;
const keyLeft = 37;
let mainCentral = document.querySelector(`.central`);
let renderScreen = function (n) {
  mainCentral.innerHTML = templates[n].innerHTML;
};

renderScreen(i);

document.addEventListener(`keydown`, function (e) {
  if (e.altKey && e.keyCode === keyRight) {
    if (i < templates.length) {
      renderScreen(i + 1);
      i++;
    }
  }
  if (e.altKey && e.keyCode === keyLeft) {
    if (i > 0) {
      renderScreen(i - 1);
      i--;
    }
  }
});
