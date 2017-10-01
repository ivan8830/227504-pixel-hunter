
const templates = [...document.querySelectorAll(`template`)];
let i = 0;

const keyRight = 39;
const keyLeft = 37;
const screen = function (n) {
  let template = templates[n].innerHTML;
  return template;
};

let mainCentral = document.querySelector(`.central`);
mainCentral.innerHTML = screen(i);

/*document.addEventListener(`keydown`, function (evt) {
  if (evt.keyCode === keyAlt) {
    if (evt.keyCode === keyRight) {
      mainCentral.innerHTML = screen(i + 1);
    }
    if (evt.keyCode === keyLeft) {
      mainCentral.innerHTML = screen(i - 1);
    }
  }
   if (evt.keyCode === keyAlt && keyRight) {
   mainCentral.innerHTML = screen(i + 1);
 }
 if (evt.keyCode === keyAlt && keyLeft) {
   mainCentral.innerHTML = screen(i - 1);
 }
});*/

document.addEventListener(`keydown`, function (e) {
  e = e || window.event;
  let b = i;
  debugger;
  if (e.altKey && e.keyCode === keyRight) {
    if (b === 6) {
      mainCentral.innerHTML = screen(b);
    } else {
      mainCentral.innerHTML = screen(b + 1);
      i++;
    }
  }
  if (e.altKey && e.keyCode === keyLeft) {
    if (b === 0) {
      mainCentral.innerHTML = screen(b);
    } else {
      mainCentral.innerHTML = screen(b - 1);
      i--;
    }
  }
});
