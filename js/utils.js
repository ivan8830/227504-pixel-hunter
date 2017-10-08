export function getElementFromTemplate(html) {
  let newElement = document.createElement(`div`);
  newElement.innerHTML = html;
  return newElement;
}

const mainCentral = document.querySelector(`.central`);

export const renderScreen = function (name) {
  mainCentral.innerHTML = ``;
  mainCentral.appendChild(name);
};
