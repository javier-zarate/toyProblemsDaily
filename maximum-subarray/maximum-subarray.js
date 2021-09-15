/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length <= 1) {
        return nums.length !== 0 ? nums[0] : 0;
    }
    
    let j = 0 , i = 0;
    let maxSum = -Infinity;
    let windowSum = 0; 
    
    while (j < nums.length) {
        windowSum += nums[j]; 
        maxSum = Math.max(maxSum, windowSum);
        j++;
        while (i < j && windowSum < 0) {
            windowSum -= nums[i];
            i++;
        }
    
    }
    return maxSum;
};

