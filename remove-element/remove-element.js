/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let total = nums.length; 
    
    for (let lastDeletedIndex = 0, currIndex = 0; currIndex < nums.length; currIndex++) {
        if (nums[currIndex] === val) {
            nums[currIndex] = "_"; 
            total--;
        } else if (lastDeletedIndex !== currIndex) {
            nums[lastDeletedIndex] = nums[currIndex];
            nums[currIndex] = "_";
            lastDeletedIndex++;
        } else {
            lastDeletedIndex++; 
        }
        
    }
    
    return total;
};