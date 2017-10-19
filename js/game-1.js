import {getElementFromTemplate, renderScreen} from "./utils";
import screenGame2 from "./game-2";
import greeScreen from "./greeting";

const screenGame1 = function () {
  const game1 = `
  <div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>
`;
  return getElementFromTemplate(game1);
};

export default screenGame1;

const input1 = screenGame1.querySelector(`input[name = question1][value = photo]`);
const input2 = screenGame1.querySelector(`input[name = question2][value = photo]`);
const input3 = screenGame1.querySelector(`input[name = question1][value = paint]`);
const input4 = screenGame1.querySelector(`input[name = question2][value = paint]`);
const gameForm = screenGame1.querySelector(`.game__content`);

gameForm.addEventListener(`click`, function () {
  if ((input1.checked || input3.checked) && (input2.checked || input4.checked)) {
    renderScreen(screenGame2);
  }
});

const back = screenGame1.querySelector(`.back`);

back.addEventListener(`click`, function () {
  renderScreen(greeScreen);
});
