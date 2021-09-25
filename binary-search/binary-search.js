/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// search for target in SORTED array.
// time complexity must be O(log n)
var search = function(nums, target) {

    const binarySearch = (start, end) => {
        if (start > end) return -1;
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) return mid;

        if (nums[mid] > target) {
            return binarySearch(start, mid - 1);
        }
        return binarySearch(mid + 1, end);
    };

    return binarySearch(0, nums.length - 1) ;
};