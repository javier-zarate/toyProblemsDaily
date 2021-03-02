/* Source: leetcode

Prompt:
You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

Example 1:

Input: nums = [1,2,2,4]
Output: [2,3]
Example 2:

Input: nums = [1,1]
Output: [1,2]

I: array of nums with 1 duplicate and 1 missing in set
O: array with dup and missing
C:
2 <= nums.length <= 10^4 there is at least 2 numbers
1 <= nums[i] <= 10^4
E: dup before, array of 2
*/

var findErrorNums = function(nums) {
  // find duplicate
  let set = new Set();
  let results = [];

  // if item has not been seen add to set
  // if item has been seen it is in set thus a dup
  for (let i = 0; i  < nums.length; i++) {
    let curr =  nums[i];
    if (set.has(curr)) {
      results.push(curr)
    } else {
      set.add(curr)
    }
  }

  // find missing number
  let i = 1;
  // numbers are ordered 1 - n thus if number is missing in set
  // while incrementing count by one is missing that is the missing number
  while(i < nums.length + 1) {
    if (!set.has(i)) {
      // number missing is guaranteed based on prompt thus a return here is valid
      results.push(i);
      return results;
    }
    i++;
  }
};



/*
Time Complexity: O(n^2) - quadratic
Space Complexity: O(n) - linear
  - creating another set of n - 1 length
*/

// // Tests
// let tests = [
//   [1,2,2,4], // result: [2,3]
//   [1,1],      // result: [1,2]
//   [1,2,3,4,5,6,7,7,9] // result: [7,8]
// ];

// for (let i in tests) {
//   console.log(findErrorNums(tests[i]));
// }