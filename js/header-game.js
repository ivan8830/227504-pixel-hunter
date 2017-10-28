
export const headerTemplateGame = function (data, withoutLives) {
  const lives = withoutLives ? `` : `
    <h1 class="game__timer">${data.time}</h1>
    <div class="game__lives">
    ${new Array(3 - data.life).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
    ${new Array(data.life).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
    </div>
  </header>`;
  const element = `
  <div>
    ${lives}
  </div>`;
  const headerGame = `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
    ${element}
    </div>
  </header>`;
  return headerGame;
};


