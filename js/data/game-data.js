export function getScope(answers, lifeCount) {
  let result = 0;
  if (answers.length < 10) {
    result = -1;
    return result;
  }
  for (let i = 0; i <= answers.length; i++) {
    if (answers[i] <= 10) {
      result = result + 150;
    } else if (answers[i] > 10 && answers[i] < 20) {
      result = result + 100;
    } else if (answers[i] >= 20) {
      result = result + 50;
    } else if (answers[i] === -1) {
      result = result;
    }
  }
  result = result + (50 * lifeCount);
  return result;
}
