/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {    
  // iterate over the numbers
  for (let i = 0; i < nums.length; i++) {
    // nested array checking the rest of array for sum
    for (let j = i + 1; j < nums.length; j++) {
      // check if i and j add up to sum 
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// Input: array, tartget 
// output: indices or sum to target [i, k]
// contraints: listed, only one solution first slution you return 
// edge cases: 
