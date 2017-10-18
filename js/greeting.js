import {getElementFromTemplate, renderScreen} from "./utils";
import rulScreen from "./rules";


const greeScreen = function (data) {
  const greeting = `
  <div class="greeting central--blur">
    <div class="greeting__logo">
      <img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter">
    </div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${data.content.title}</h3>
      <p>${data.content.text}</p>
    </div>
    <div class="greeting__continue">
      <span>
        <img src="img/arrow_right.svg" width="64" height="64" alt="Next">
      </span>
    </div>
  </div>
`;
  return getElementFromTemplate(greeting);
};

export default greeScreen;

const pointer = greeScreen.querySelector(`.greeting__continue`);
pointer.addEventListener(`click`, function () {
  renderScreen(rulScreen);
});
