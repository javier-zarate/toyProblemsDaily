//Source: leetcode

// Prompt:
/**
 * Given a string s, find the longest substring without repeating characters.



Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc"
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b"

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke"
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: null

 */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) {
  // I: string
  // O: FIRST longest available substring,
  // C: no repeats
  // E: empty string, repeating chars , entire string is unique

  // iterate over the string
  // store each character seen in a set
  // if at anypoint a char has already been seen reset set and store current longest running string
  // add check to see if current run is longest then the previous and overwrite string accordingly

  // return substring

  // Edge Cases
  if (s.length === 0) {
    return null;
  }
  let set = new Set();
  let sub = '';

  let startIndex = 0;


  for (let i = 0; i < s.length; i++) {
    debugger;
    let curr = s[i];

    if (!set.has(curr)) {
      set.add(curr);
    } else {
      // Store current run
      if (sub.length < set.size) {
        sub = s.slice(startIndex, i);
      }

      // RESET
      set = new Set();
      set.add(curr);
      startIndex = i;
    }
  }

  if (sub.length === 0) return s;
  return sub;
};


// Test Cases
lengthOfLongestSubstring("");
lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring('bbbbb');
lengthOfLongestSubstring('pwwkew');
lengthOfLongestSubstring('abcdefg');


// Time Complexity:
// O(n) - Entire string has to be traversed to find longest possible sub
// Space Complexity:
//  NOT great, thats forsure.
//  O(n^2) - 'sub' could store entire string if unique as well as 'set'
