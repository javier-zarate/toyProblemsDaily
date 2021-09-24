/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    const binarySearch = (start, end) =>  {
        // base case for target not in arr
        if (start > end) return -1;
        
        //determine mid 
        let mid = Math.floor((start + end)/ 2);
        
        if (nums[mid] === target) return mid; 
        
        if (nums[mid] > target) {
            return binarySearch(start, mid - 1); 
        } else {
            return binarySearch(mid + 1, end); 
        }
    }
    
    return binarySearch(0, nums.length - 1);
};