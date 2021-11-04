/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (nums[i] === nums[i - 1]) continue;
        
        twoSum(nums, i, result);
    }
    return result;
};

const twoSum = (nums, i, result) => {
    let seen = new Set();  
    
    for(let j = i + 1; j < nums.length; j++) {
        let complement = -nums[i] - nums[j];
        if(seen.has(complement)) {
            result.push([nums[i], complement, nums[j]]);
            while (j + 1 < nums.length && nums[j] === nums[j + 1]){
                ++j;
            }
        }
        seen.add(nums[j])
    }
};