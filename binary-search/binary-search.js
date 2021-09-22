/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const binarySearch = (nums, target, start, end) => {
        // base case 
        if (start > end) return -1;

        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) return mid;

        if (nums[mid] > target) {
          return binarySearch(nums, target, start, mid - 1);
        } else {
          return binarySearch(nums, target, mid + 1, end); 
        }
    };
    
    return binarySearch(nums, target, 0, nums.length -1);
};