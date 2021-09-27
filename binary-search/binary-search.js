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

const sortedArray = [1, 3, 4, 6, 7, 5, 14, 100, 101, 2002, 3003, 4042];

console.log(search(sortedArray, 4));

// implementation of binarySearch
// find the median of 2 sorted arrays
var findMedianSortedArrays = function (nums1, nums2) {
	// set inputs to A and B where is A is smaller len array and B is larger len array
	let A = nums1.length <= nums2.length ? nums1 : nums2;
	let B = nums1.length <= nums2.length ? nums2 : nums1;

	let total = A.length + B.length;
	let half = Math.floor(total / 2);

	let left = 0;
	let right = A.length - 1;

	while (left <= right) {
		// set mid variables
		let midA = Math.floor((left + right) / 2);
		let midB = half - midA - 2;

		// set variables
		let a1 = midA < 0 ? -Infinity : A[midA];
		let a2 = midA + 1 >= A.length ? Infinity : A[midA + 1];
		let b1 = midB < 0 ? -Infinity : B[midB];
		let b2 = midB + 1 >= B.length ? Infinity : B[midB + 1];

		// if in range
		if (a1 <= b2 && b1 <= a2) {
			// check if even or odd
			if (total % 2 === 0) {
				let total = Math.max(a1, b1) + Math.min(a2, b2);
				return (total / 2).toFixed(5);
			} else {
				return Math.min(a2, b2);
			}
		}

		// set new left and right
		if (b1 > a2) {
			left = midA + 1;
		} else {
			right = midA - 1;
		}
	}
};
