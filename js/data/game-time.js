export function createTimer(second) {
  const callbacks = {
    end: []
  };

  return {
    addEventListener(name, callback) {
      if (!callbacks[name]) {
        throw Error(`Время еще невышло`);
      }
      callbacks[name].push(callback);
    },
    tick() {
      second -= 1;
      if (second === 0) {
        const call = (fn) => fn();
        callbacks.end.forEach(call);
      }
    }
  };
}
