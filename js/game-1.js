import {getElementFromTemplate, getNumber, renderScreen} from "./utils";
import greeScreen from "./greeting";
import {footerTemplate} from "./footer";
import {data, photo} from "./data";
import {headerTemplateGame} from "./header-game";
import statsElement from "./stats";

const screenGame1 = function () {
  const number = getNumber(0, 2);
  const game1 = getElementFromTemplate(`
  ${headerTemplateGame(data, false)}
  <div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src="${photo.paintings[number]}" alt="Option 1" width="468" height="458">
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
        <img src="${photo.paintings[number]}" alt="Option 2" width="468" height="458">
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

  const input1 = game1.querySelector(`input[name = question1][value = photo]`);
  const input2 = game1.querySelector(`input[name = question2][value = photo]`);
  const input3 = game1.querySelector(`input[name = question1][value = paint]`);
  const input4 = game1.querySelector(`input[name = question2][value = paint]`);
  const gameForm = game1.querySelector(`.game__content`);
  function next(stan, answer) {
    if (stan.life < 1) {
      renderScreen(statsElement(stan));
      return;
    }

    if (stan.answers.length >= 10) {
      renderScreen(statsElement(stan));
      return;
    }

    data.answers.push(answer);
    renderScreen(screenGame1(data));
  }

  gameForm.addEventListener(`click`, function () {
    if ((input1.checked || input3.checked) && (input2.checked || input4.checked)) {
      next(data, 100);
    }
  });

  const back = game1.querySelector(`.back`);

  back.addEventListener(`click`, function () {
    renderScreen(greeScreen(data));
  });
  return game1;
};
export default screenGame1;
