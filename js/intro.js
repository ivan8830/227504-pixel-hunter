import {getElementFromTemplate, renderScreen} from "./utils";
import greeScreen from "./greeting";
import {footerTemplate} from "./footer";


const introElement = function (data) {
  const intro = getElementFromTemplate(` 
  <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup>Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>
  ${footerTemplate()}
`);
  const star = intro.querySelector(`.intro__asterisk`);
  star.addEventListener(`click`, function () {
    renderScreen(greeScreen(data));
  });
  return intro;
};

export default introElement;


