
export const getElementFromTemplate = function (html) {
  let newElement = document.createElement(`div`);
  newElement.innerHTML = html;
  return newElement;
};

const mainCentral = document.querySelector(`.central`);

export const renderScreen = function (element) {
  mainCentral.innerHTML = ``;
  mainCentral.appendChild(getElementFromTemplate(element));
};
