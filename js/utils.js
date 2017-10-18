import {initialState} from "./data";

export const getElementFromTemplate = function (html) {
  let newElement = document.createElement(`div`);
  newElement.innerHTML = html;
  return newElement;
}

const mainCentral = document.querySelector(`.central`);

export const renderScreen = function (data) {
  mainCentral.innerHTML = ``;
  mainCentral.appendChild(data);
};
