import {getElementFromTemplate, next, renderScreen} from "./utils";
import greeScreen from "./greeting";
import {footerTemplate} from "./footer";

import {headerTemplateGame} from "./header-game";
import statsElement from "./stats";

const screenGame1 = function (data, question) {
  const game1 = getElementFromTemplate(`
  ${headerTemplateGame(data, false)}
  <div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src="${question.variants[0].image}" alt="Option 1" width="468">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo" data-answer = "photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint" data-answer = "paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="${question.variants[1].image}" alt="Option 2" width="468">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo" data-answer = "photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint" data-answer = "paint">
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
  const gameForm = game1.querySelector(`.game__content`);
  gameForm.addEventListener(`click`, function () {
    if (game1.querySelector(`input[name=question1]:checked`) && game1.querySelector(`input[name=question2]:checked`)) {
      const ans1 = question.variants[0].answer;
      const ans2 = question.variants[1].answer;
      const input1 = game1.querySelector(`input[name=question1][data-answer = ${ans1}]`);
      const input2 = game1.querySelector(`input[name=question2][data-answer = ${ans2}]`);
      console.log(data);
      next(data, input1.checked && input2.checked);
    }
  });


  const back = game1.querySelector(`.back`);

  back.addEventListener(`click`, function () {
    renderScreen(greeScreen(data));
  });
  return game1;
};
export default screenGame1;
