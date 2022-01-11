/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    const bs = (start, end) => {
        if (start > end) return - 1;
        
        let mid = Math.floor((end + start) / 2); 
        
        if (nums[mid] === target) return mid; 
        
        if (nums[mid] > target) return bs(start, mid - 1);
        return bs(mid + 1, end);
    };
    
    return bs(0, nums.length - 1);
    
};