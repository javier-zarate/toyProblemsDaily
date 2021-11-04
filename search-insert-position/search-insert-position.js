/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const binarySearch = (start, end) => {
        if(start > end) {
            return start; 
        }
        
        const mid = Math.floor(start + (end - start) / 2); 
        
        if (nums[mid] === target) return mid;
        
        if(nums[mid] > target) return binarySearch(start, mid - 1); 
        
        return binarySearch(mid + 1, end);
        
    }; 
    
    return binarySearch(0, nums.length - 1);
};