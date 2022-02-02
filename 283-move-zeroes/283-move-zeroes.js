/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.length === 0) return nums;
    
    for (let lastNonZeroAt = 0, curr = 0;curr < nums.length; curr++) {
        if (nums[curr] !== 0) {
            [nums[lastNonZeroAt], nums[curr]] = [nums[curr], nums[lastNonZeroAt]];
            lastNonZeroAt++;
        }
    }
};