/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
//     const sorted = nums.sort((a, b) => a - b);
    
//     let left = 0, right = nums.length - 1;
    
//     while (left < right) {
//         currSum = nums[left] + nums[right]
//         if (currSum === target) return [left, right];
        
//         if (currSum > target) {
//             right--;
//         } else {
//             left++;
//         }
//     }
    
//     return [];
    
  var map = new Map();

  for(var i = 0; i<nums.length; i++) {
      var num = nums[i];
      
      if(map.get(num) === undefined) map.set(target - num, i);
      
      else return [map.get(num), i];
  }
};