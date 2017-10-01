
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
 if (e.altKey && e.keyCode === keyRight) {
   mainCentral.innerHTML = screen(i + 1);
 }
 if (e.altKey && e.keyCode === keyLeft) {
   mainCentral.innerHTML = screen(i - 1);
 }
});
