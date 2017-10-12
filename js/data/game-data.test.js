import assert from "assert";
import {getScope} from "./game-data";
import {createTimer} from "./game-time";

describe(`Array`, () => {
  describe(`#indexOf()`, () => {
    it(`should return -1 when the value is not present`, () => {
      assert.equal(-1, [1, 2, 3].indexOf(-1));
    });
  });
});

describe(`game`, () => {
  it(`Если игрок ответил меньше, чем на 10 вопросов`, () => {
    assert.equal(-1, getScope([15, 3, 5, 4, 10], 3));
  });
  it(`Если игрок ответил на все вопросы не быстро и не медленно и остались все жизни`, () => {
    assert.equal(1150, getScope([15, 13, 15, 14, 16, 15, 13, 15, 14, 16], 3));
  });
  it(`Если игрок ответил на все вопросы быстро и остались все жизни`, () => {
    assert.equal(1650, getScope([5, 3, 5, 4, 6, 5, 3, 5, 4, 6], 3));
  });
  it(`Если игрок ответил на все вопросы медленно и остались все жизни`, () => {
    assert.equal(650, getScope([25, 23, 25, 24, 26, 25, 23, 25, 24, 26], 3));
  });
  it(`Если игрок ответил на все вопросы медленно и быстро остались все жизни`, () => {
    assert.equal(850, getScope([25, 23, 25, 8, 26, 25, 7, 25, 24, 26], 3));
  });
});

describe(`createTimer`, () => {
  it(`test`, () => {
    const timer = createTimer(2);
    let ended = false;
    timer.onEnd(() => {ended = true});
    timer.tick();
    assert.equal(ended, false);
    timer.tick();
    assert.equal(ended, true);
  });
})
