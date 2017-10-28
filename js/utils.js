
export const getElementFromTemplate = function (html) {
  let newElement = document.createElement(`div`);
  newElement.innerHTML = html;
  return newElement;
};

const mainCentral = document.querySelector(`.central`);

export const renderScreen = function (element) {
  mainCentral.innerHTML = ``;
  mainCentral.appendChild(element);
};

export const getScope1 = function (state) {
  let result = 0;
  if (state.answers.length < 10) {
    result = -1;
    return result;
  }
  for (let i = 0; i <= state.answers.length; i++) {
    result += 100;
  }
  return result;
};

export const getNumber = function (from, to) {
  return Math.floor((Math.random() * (to - from + 1)) + from);
};


