/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let sum = 0;
    let seen = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (!seen[nums[i]]) {
            seen[nums[i]] = 1;
            sum += nums[i];
        } else if (seen[nums[i]] === 2) {
            continue;
        } else {
            sum -= nums[i];
            seen[nums[i]] = 2;
        }
    }
    return sum < 0 ? 0 : sum;
};