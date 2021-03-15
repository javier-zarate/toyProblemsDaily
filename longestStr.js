/**
 * Source: leetcode
 *
 * Prompt:
 * Given a string s, find the lenfth of the longest substring without
 * without repreating characters
 *
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0

 * I: single string
 * O: longest substring length
 * C:0 <= s.length <= 5 * 10^4
 *  consists of English letters, digits, symbols and spaces.
 * E: empty string, string of size one
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	if (s.length === 0) return 0;

	let left = 0;
	let right = 0;
	let max = 0;

	let set = new Set();

	while (right < s.length) {
		if (!set.has(s.charAt(right))) {
			set.add(s.charAt(right));
			right++;
		} else {
			set.delete(s.charAt(left));
			left++;
		}

		if (set.size > max) max = set.size;
	}

	return max;
};
/**
 * Time Complexity: o(n + n)
 *  - right pointer WILL traverse the string no matter what
 *  - left pointer in the WORST case traverse the whole string aswell
 * Space Complexity: O(n)
 * 	- in the worst case the entire string is unique and it is stored in the set.
 */
