export function createTimer(second) {
  const timer = {
    time: second,
    tick() {
      this.time--;
    },
    onEnd() {
      if (this.time === 0) {
        return true;
      } else {
        return false;
      }
    }
  };
  return timer;
}

