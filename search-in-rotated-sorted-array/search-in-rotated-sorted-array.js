/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0 || nums === null) return -1;
    
    let low = 0, high = nums.length -1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2); 
        
        if (nums[mid] === target) return mid;
        
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1; 
            } else {
                low = mid + 1
            }
        } else {
            if (target > nums[mid] && target <= nums[high]) {
                low = mid += 1;
            } else {
                high = mid - 1;
            }
        }
    }
    
    return -1;
};