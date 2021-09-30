/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// search for target in SORTED array.
// time complexity must be O(log n)
var search = function (nums, target) {
	// return recursiceBinarySearch(nums, target, 0, nums.length - 1);
    return iterateBinarySearch(nums, target);
};

const iterateBinarySearch = (nums, target) => {
    let start = 0, end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            console.log(`Target: ${target} was found in index: [${mid}]`);
            return mid;
        }

        if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    console.log(`Target: ${target} was not in nums: [${nums}]`);
    return -1;
};

const recursiceBinarySearch = (nums, target, start, end) => {
	if (start > end) {
		console.log(`Target: ${target} was not in nums: [${nums}]`);
		return -1;
	}

	let mid = Math.floor((start + end) / 2);

	if (nums[mid] === target) {
		console.log(`Target: ${target} was found in index: [${mid}]`);
		return mid;
	}

	if (nums[mid] > target) {
		return recursiceBinarySearch(nums, target, start, mid - 1);
	}

	return recursiceBinarySearch(nums, target, mid + 1, end);
};

// const sortedArray = [1, 3, 4, 6, 7, 5, 14, 100, 101, 2002, 3003, 4042];

// console.log(search(sortedArray, 4));
