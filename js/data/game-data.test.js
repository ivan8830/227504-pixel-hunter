import assert from "assert";
import {getScope} from "./game-data";
import {createTimer} from "./game-time"

describe(`Array`, () => {
  describe(`#indexOf()`, () => {
    it(`should return -1 when the value is not present`, () => {
      assert.equal(-1, [1, 2, 3].indexOf(3));
    });
  });
});


let time = 20;

const assert = chai.assert;

describe(`game`, () => {
  it(`Если игрок ответил меньше, чем на 10 вопросов`, () => {
    assert.equal(getScope(8, 3), 10);
  });
  it(`Если игрок ответил на все вопросы и не быстро и не медленно и у него остались все жизни`, () => {
    if (assert.equal(getScope(8, 3), 10) && assert.equal(createTimer(30), 10) > 10 && time < 20) {
      return 1150;
    }
    return -1;
  });
  it(`Если игрок ответил на все вопросы и не быстро и не медленно и у него осталась 2 жизни`, () => {
    if (game.length === 9 && time > 10 && time < 20) {
      return 1100;
    }
    return -1;
  });
  it(`Если игрок ответил на все вопросы и не быстро и не медленно и у него осталась 1 жизнь`, () => {
    if (game.length === 9 && time > 10 && time < 20) {
      return 1050;
    }
    return -1;
  });
  it(`Если игрок ответил на все вопросы быстро и у него остались все жизни`, () => {
    if (game.length === 9 && time < 10) {
      return 1300;
    }
    return -1;
  });
  it(`Если игрок ответил на все вопросы быстро и у него остались 2 жизни`, () => {
    if (game.length === 9 && time < 10) {
      return 1250;
    }
    return -1;
  });
  it(`Если игрок ответил на все вопросы быстро и у него осталaсь 1 жизнь`, () => {
    if (game.length === 9 && time < 10) {
      return 1200;
    }
    return -1;
  });
});
