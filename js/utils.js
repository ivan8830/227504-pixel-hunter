import screenGame3 from "./game-3";
import screenGame2 from "./game-2";
import screenGame1 from "./game-1";
import statsElement from "./stats";

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

const games = {screenGame1, screenGame2, screenGame3};

export function next(data, answer) {
  data.answers.push(answer);
  const nextAns = data.questions[data.answers.length];
  renderScreen(screenGame1(data, nextAns));
  /*if (data.life === 0 || data.answers.length > 10) {
    renderScreen(statsElement(data));
  }

  //data.answers.push(isCorrect ? 15 : -1);

  const question = data.questions[data.answers.length];
  const screen = games[data.questions.type];
  renderScreen(screen(data, question));*/
}
