/**
 * Source: (Anonymous) Coding Assesment
 *
 * Prompt: (As Thorough as possible from memory)
 *
 * You have a old phone (think old nokia pre touchscreen) and you want to send a message to a
 * friend. The issue is not all the keys work.
 *
 * You are given and array of words, array of numbers that work.
 * Write a function that return array of boolean(s) based on if word can be typed with given
 * working key set.
 *
 * (key pad image was provided)
 * image was as follows:
 * 1 - blank
 * 2 - abc
 * 3 - def
 * 4 - ghi
 * 5 - jkl
 * 6 - mno
 * 7 - pqrs
 * 8 - tuv
 * 9 - wxyz
 * 0 - blank
 * * - blank
 * # - blank
 *
 *
 * ex:
 * ableToWriteMessage([2,3], ['abc','defg']) -> returns [true, false]
 * // needed key 4 to access g in second message
 *
 * - you are guaranteed messages array of length 1 through 50
 * - you are guaranteed digits array length 1 though 50
 * - all messages will be lowercase
 */

function ableToWriteMessage(digits, messages) {
  let results = [];

  const key = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m','n','o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };

  for (let i = 0; i < messages.length; i++) {
    currentWord = messages[i];
    wordIsValid = true;
    for(let j = 0; j < currentWord.length; j++) {
      currentLetter = currentWord[j];
      if (!inKey(digits, key, currentLetter)) {
        wordIsValid = false;
        break;
      }
    }
    if (wordIsValid) {
      results.push(true);
    } else {
      results.push(false);
    }
  }

  return results;
}

function inKey(digits, key, letter) {
  // iterate over the digits
  let letterIsFound = false;
  for (let i = 0; i < digits.length; i ++) {
    // iterate over the values in the digits
    if (digits[i] === 0 || digits[i] === 1) continue;
    currentKeyValues = key[digits[i].toString()];
    for (let j = 0; j < currentKeyValues.length; j++) {
      if (currentKeyValues[j] === letter) {
        letterIsFound = true;
        break;
      }
    }
    if (letterIsFound) {
      return true;
    }
  }
  return false;
}

// test cases:
let test1 = ableToWriteMessage([2, 3], ['abc','defg']); //returns [true, false]
let test2 = ableToWriteMessage([4, 7], ['gqr','rs']); //returns [true, true]
let test3 = ableToWriteMessage([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], ['hello','world']); //returns [true, true]
let test4 = ableToWriteMessage([1, 0], ['hello','world']); //returns [false, false]
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);