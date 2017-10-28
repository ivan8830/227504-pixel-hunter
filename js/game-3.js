import {getElementFromTemplate, renderScreen} from "./utils";
import statsElement from "./stats";
import greeScreen from "./greeting";
import {footerTemplate} from "./footer";
import {data} from "./data";
import {headerTemplateGame} from "./header-game";

const screenGame3 = function () {
  const game3 = getElementFromTemplate(`
  ${headerTemplateGame(data, false)}
  <div class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
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
  const gameForm = game3.querySelector(`.game__content`);

  gameForm.addEventListener(`click`, function () {
    renderScreen(statsElement(data));
  });

  const back = game3.querySelector(`.back`);

  back.addEventListener(`click`, function () {
    renderScreen(greeScreen(data));
  });
  return game3;
};
export default screenGame3;

