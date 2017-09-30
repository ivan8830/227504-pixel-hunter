
const templates = [...document.querySelectorAll(`template`)];
const screen = function (n) {
  return templates[n];
  /*let template =
  let newTemplate = document.querySelector(`${template}`);
   newTemplate;*/
};

debugger;
let mainCentral = document.querySelector(`.central`);
mainCentral.innerHTML = screen(0);


