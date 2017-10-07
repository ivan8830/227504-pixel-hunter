//import {renderScreen} from "./utils";

import rulesElement from "./rules";
debugger;
const mainCentral = document.querySelector(`.central`);
const renderScreen = function (name) {
  mainCentral.innerHTML = name.innerHTML;
  document.appendChild(name);
};
renderScreen(rulesElement);
