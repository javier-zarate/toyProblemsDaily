/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
let findSum = (string) => {
  let values = {
    'a': '0',
    'b': '1',
    'c': '2',
    'd': '3',
    'e': '4',
    'f': '5',
    'g': '6',
    'h': '7',
    'i': '8',
    'j': '9',
    }

  let sum = '';

  for (let i of string) {
    if (values[i] === undefined) { continue; };
    sum += values[i];
  }

  return Number(sum);
}


var isSumEqual = function(firstWord, secondWord, targetWord) {
    return findSum(firstWord) + findSum(secondWord) === findSum(targetWord);
};
