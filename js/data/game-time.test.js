import assert from "assert";
import {createTimer} from "./game-time";

describe(`createTimer`, () => {
  it(`test`, () => {
    const timer = createTimer(2);
    let ended = false;
    timer.addEventListener(`end`, function () {
      ended = true;
    });
    timer.tick();
    assert.equal(ended, false);
    timer.tick();
    assert.equal(ended, true);
  });
});
