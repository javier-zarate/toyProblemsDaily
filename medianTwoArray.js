/**
 * Source: Leetcode
 *
 * Prompt:
 *
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
Example 3:

Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000
Example 4:

Input: nums1 = [], nums2 = [1]
Output: 1.00000
Example 5:

Input: nums1 = [2], nums2 = []
Output: 2.00000


Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106

Follow up: The overall run time complexity should be O(log (m+n)).
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
	nums1.push(...nums2);
	let allArrs = nums1.sort((a, b) => a - b);
	let mid = allArrs.length / 2;

	if (mid % 1 !== 0) {
		mid = Math.floor(mid);
		return allArrs[mid];
	}
	return (allArrs[mid - 1] + allArrs[mid]) / 2;
};

/**
 * Time Complexity:
 * nums1 = n, nums2 = m
 * nums1.push(...nums2) -> O(m)
 * .sort() --> O(n+m log n+m)
 *
 * Space Complexity:
 * O(n + m) = storing both arrays in new single array
 */
console.log(findMedianSortedArrays([1, 3], [2, 5, 6]));
