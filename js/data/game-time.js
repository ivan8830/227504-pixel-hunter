export function createTimer(second) {
  const timer = second;
  return {
    addEventListener(name, callback) {
      if (!callback[name]) {
        throw Error(`Время еще невышло`);
      }
      callback[name].push(callback);
    },
    tick() {
      this.timer--;
      if (timer === 0) {
        const call = (fn) => fn();
        timer.end.forEach(call);
      }
    }
  };
}
