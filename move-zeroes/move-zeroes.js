/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let z = 0, curr = 0; curr < nums.length; curr++) {
        if(nums[curr] !== 0) {
            [nums[z], nums[curr]] = [nums[curr], nums[z]];
            z++;
        }
    }

};