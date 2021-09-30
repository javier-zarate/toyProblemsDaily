// implementation of binarySearch
// find the median of 2 sorted arrays
var findMedianSortedArrays = function (nums1, nums2) {
	// set inputs to A and B where is A is smaller len array and B is larger len array
	let A = nums1.length <= nums2.length ? nums1 : nums2;
	let B = nums1.length <= nums2.length ? nums2 : nums1;;;;;;;

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

console.log(findMedianSortedArrays([1,2,3,4,5], [3,4,7,15,16]));