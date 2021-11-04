// Given a string with lowercase letters only, if you are allowed to
// replace no more than k letters with any letter, find the length
//of the longest substring having the same letters after replacement.

/*
Example 1:

Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".
Example 2:

Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have the longest repeating substring "bbbb".
Example 3:

Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
*/

const length_of_longest_substring = function(str, k) {
  // create a hashmap that keesp track of the char frequencies
  // model window after longest reapeating char and change k chars
  // update max length each iteration
  let longestSub = 0, maxRepeatLetter = 0, windowStart = 0;
  const frequencyMap = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    // update frequencyChar map for window
    let rightChar = str[windowEnd];
    if (!(rightChar in frequencyMap)) {
      frequencyMap[rightChar] = 0;
    }
    frequencyMap[rightChar]++;

    // update max letterCount
    maxRepeatLetter = Math.max(maxRepeatLetter, frequencyMap[rightChar]);

    // if max repeat letter count plus remaining letter is > k shrink window
    if (windowEnd - windowStart + 1 - maxRepeatLetter > k) {
      let leftChar = str[windowStart];
      frequencyMap[leftChar]--;
      windowStart++;
    }

    longestSub = Math.max(longestSub, windowEnd - windowStart + 1);
  }
  return longestSub;
};

// Tests
let testString = ["aabccbb", "abbcb", "abccde"];
let testK = [2, 1, 1];
let testAnswers = [5, 4, 3]

for (let i in testString){
  result = length_of_longest_substring(testString[i], testK[i]);
  console.log(`Input: ${testString[i]}, k = ${testK[i]}`);
  console.log(`Expected: ${testAnswers[i]}\nActual: ${result}\n`)
}

