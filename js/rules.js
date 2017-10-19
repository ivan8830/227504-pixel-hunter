import {getElementFromTemplate, renderScreen} from "./utils";
import screenGame1 from "./game-1";
import greeScreen from "./greeting";
import {headerTemplateGame} from "./header-game";


const rulScreen = function (data) {
  const rules = `
  ${headerTemplateGame}
  <div class="rules">
    <h1 class="rules__title">${data.rules.title}</h1>
    <p class="rules__description">${data.rules.text}<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
  `;
  return getElementFromTemplate(rules);
};

export default rulScreen;
const rulesForm = rulScreen.querySelector(`.rules__form`);
const button = rulScreen.querySelector(`.rules__button`);
const input = rulScreen.querySelector(`.rules__input`);

input.addEventListener(`input`, function (e) {
  button.disabled = e.target.value.length === 0;
});

rulesForm.addEventListener(`submit`, function (e) {
  renderScreen(screenGame1);
  e.preventDefault();
});

const back = rulScreen.querySelector(`.back`);

back.addEventListener(`click`, function () {
  renderScreen(greeScreen);
});
