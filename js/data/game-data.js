export function getScope(answers, lifeCount) {
  let result = 0;
  if (answers.length < 10) {
    result = -1;
    return result;
  }
  for (let i = 0; i <= answers.length; i++) {
    if (answers[i] < 10 && answers[i] > 0) {
      result += 150;
    } else if (answers[i] > 10 && answers[i] < 20) {
      result += 100;
    } else if (answers[i] >= 20) {
      result += 50;
    }
  }
  result = result + (50 * lifeCount);
  return result;
}
