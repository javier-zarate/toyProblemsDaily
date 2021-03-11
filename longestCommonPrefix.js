/* Source: leetCode, March LeetCoding Challenge 2021

Prompt:
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".



Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

I: array of strings
O: string -> greatest matching prefix
C:
   0 <= strs.length <= 200
   0 <= strs[i].length <= 200
   strs[i] consists of only lower-case English letter
E: no string/empty string

*/

/*
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";
  if (strs === null || strs.length === 0) return result;

  let index = 0;
  for (let c of strs[0]) {
    for (let i = 1; i < strs.length; i++) {
      if (index >= strs[i].length || c !== strs[i].charAt(index)) return result;
    }
    result += c;
    index++;
  }
  return result;
};

/*
  Time Complexity: O(n)
    - every character is visited
  Space Complexity: O(1)
    - only a few varibles stored
*/
