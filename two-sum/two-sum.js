/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* Brute for solution */
// var twoSum = function(nums, target) {
//   // iterate over the numbers
//   for (let i = 0; i < nums.length; i++) {
//     // nested array checking the rest of array for sum
//     for (let j = i + 1; j < nums.length; j++) {
//       // check if i and j add up to sum
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };
// Time  complexity: O(n^2)
// Space Complexity: O(1)

/* Optimized solution */
var twoSum = function (nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (hash[target - num] !== undefined) {
      return [i, hash[target - num]];
    }
    hash[num] = i;
  }
  return [];
}

// this solution is faster
// Time Complexity: O(n) -> traverse arr once
// Space Complexity: O(n) -> worst case store all numbers in hashmap
