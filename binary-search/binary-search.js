/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// search for target in SORTED array.
// time complexity must be O(log n)
var search = function(nums, target) {

    const binarySearch = (start, end) => {
        if (start > end) return 'Target not in Array!';
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) return `Target ${target} found at index ${mid} in [${nums}]`;

        if (nums[mid] > target) {
            return binarySearch(start, mid - 1);
        }
        return binarySearch(mid + 1, end);
    };

    return binarySearch(0, nums.length - 1) ;
};



const sortedArray = [1,3,4,6,7,5,14,100,101,2002,3003,4042];

console.log(search(sortedArray, 4));

















