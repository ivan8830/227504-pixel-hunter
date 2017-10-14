import assert from "assert";
import {createTimer} from "./game-time";

describe(`createTimer`, () => {
  it(`test`, () => {
    const timer = createTimer(2);
    timer.tick();
    assert.equal(timer.onEnd(), false);
    timer.tick();
    assert.equal(timer.onEnd(), true);
  });
});
