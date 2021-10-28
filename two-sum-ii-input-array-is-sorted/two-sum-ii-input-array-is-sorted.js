/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left = 0, right = nums.length -1; 
    
    while (left < right) {
        let currSum = nums[left] + nums[right]
        if (currSum === target){
            return [left + 1, right + 1];
        }
        
        if (currSum < target) left++; 
        if (currSum > target) right--;
    }
    return [];
};