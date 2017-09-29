`use strict`;
const typeScreen = [`greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`];

const getRandomName = () => typeScreen[Math.floor(Math.random() * typeScreen.length)];


const screen = function () {
  let template = document.querySelector(`#${getRandomName()}`);
  let fragment = document.createDocumentFragment();
  let newElement = document.createElement(`div`);
  fragment.appendChild(newElement);
  return template;
};
debugger;

let newScreen = document.querySelector(`body`);
let mainCentral = document.querySelector(`.central`);
newScreen.removeChild(mainCentral);
newScreen.appendChild(screen());


