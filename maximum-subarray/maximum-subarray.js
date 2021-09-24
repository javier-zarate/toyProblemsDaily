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
    
    // create window from start position accumulating sum
    while (j < nums.length) {
        windowSum += nums[j]; 
        maxSum = Math.max(maxSum, windowSum);
        j++;
        
        // if sum is less then 0 shorten window from front subtracting elements
        // until it is positive or i meets j (both pointers at same element)
        while (i < j && windowSum < 0) {
            windowSum -= nums[i];
            i++;
        }
    
    }
    return maxSum;
};

// maximum sum will be traversed 
// if all values are negative pointers will both be at same location
// 1 element windows until end off array.

