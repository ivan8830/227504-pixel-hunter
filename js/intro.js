import {getElementFromTemplate, renderScreen} from "./utils";
import greeScreen from "./greeting";

const introElement = function (data) {
  const intro = ` 
  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">${data.intro.title}</h1>
      <p class="intro__motto"><sup>*</sup>${data.intro.text}</p>
    </div>
  </div>`;
  return getElementFromTemplate(intro);
};

export default introElement;

const star = introElement.querySelector(`.intro__asterisk`);
star.addEventListener(`click`, function () {
  renderScreen(greeScreen);
});
