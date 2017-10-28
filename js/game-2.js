import {getElementFromTemplate, renderScreen} from "./utils";
import screenGame3 from "./game-3";
import greeScreen from "./greeting";
import {footerTemplate} from "./footer";
import {data} from "./data";
import {headerTemplateGame} from "./header-game";

const screenGame2 = function () {
  const game2 = getElementFromTemplate(`
  ${headerTemplateGame(data, false)}
  <div class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
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
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>
  ${footerTemplate()}
`);
  const gameForm = game2.querySelector(`.game__content`);
  const input1 = game2.querySelector(`input[type = radio][value = photo]`);
  const input2 = game2.querySelector(`input[type = radio][value = paint]`);

  gameForm.addEventListener(`click`, function () {
    if (input1.checked || input2.checked) {
      renderScreen(screenGame3);
    }
  });

  const back = game2.querySelector(`.back`);

  back.addEventListener(`click`, function () {
    renderScreen(greeScreen);
  });
  return game2;
};

export default screenGame2;


