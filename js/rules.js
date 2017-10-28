import {getElementFromTemplate, renderScreen} from "./utils";
import screenGame1 from "./game-1";
import greeScreen from "./greeting";
import {headerTemplateGame} from "./header-game";
import {data} from "./data";
import {footerTemplate} from "./footer";


const rulScreen = function () {
  const rules = getElementFromTemplate(`
  ${headerTemplateGame(data, true)}
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото 
      <img src="img/photo_icon.png" width="16" height="16"> или рисунок 
      <img src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
  ${footerTemplate()}
  `);
  const rulesForm = rules.querySelector(`.rules__form`);
  const button = rules.querySelector(`.rules__button`);
  const input = rules.querySelector(`.rules__input`);

  input.addEventListener(`input`, function (e) {
    button.disabled = e.target.value.length === 0;
  });

  rulesForm.addEventListener(`submit`, function (e) {
    data.name = input.value;
    renderScreen(screenGame1(data));
    e.preventDefault();
  });
  const back = rules.querySelector(`.back`);

  back.addEventListener(`click`, function () {
    renderScreen(greeScreen(data));
  });
  return rules;
};

export default rulScreen;

