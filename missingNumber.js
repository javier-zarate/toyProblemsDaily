/* Source: leetCode, March LeetCoding Challenge 2021

Prompt:
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
Example 4:

Input: nums = [0]
Output: 1
Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the missing number in the range since it does not appear in nums.

I: array or numbers
O: number missing in set per rules
C:
  n == nums.length
  1 <= n <= 10^4
  0 <= nums[i] <= n
  All the numbers of nums are unique.
E: Constraints take care of potential edge cases
ex: repeart nums, num higher than n in arr etc

/**
 * @param {number[]} nums
 * @return {number}
 */

/* first approach
  Time Complexity:
    .sort() - about O(n log n)
    for loop - O(n)
    total: O(n log n)
  Space Complexity: O(n)
   - store a copu of sorted array
*/

// var missingNumber = function(nums) {
//   let sorted = nums.sort((a, b) => a -b);

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[0] !== 0) { return 0; }
//     if (nums[i] + 1 !== nums[i + 1]) {
//       return nums[i] + 1;
//     }
//   }
// };

var missingNumber = function (nums) {
  const n = nums.length;
  // use formula for nth triangular number for sum
  // using reduce adds to the time complexity
  let sum = ((n + 1) * n) / 2;

  // iterate and subtract each number to be left with
  // missing number
  for (let i = 0; i < n; i++) {
    sum = sum - nums[i];
  }

  return sum;
};
/* Final approach
  Time Complexity:
    for loop - O(n)
    total: O(n)
  Space Complexity: O(1)
    - simply storing 2 variables this still O(1)
*/


const tests = [
  [9, 6, 4, 2, 3, 5, 7, 0, 1],  // 8
  [3, 0, 1],  // 2
  [0, 1]  // 2
];

for (let i in tests) {
  console.log(missingNumber(tests[i]));
}
