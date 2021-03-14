/**
 * Source: 'https://www.dailycodingproblem.com/' daily email
 *
 *
 * Prompt:
 * This problem was asked by Stripe.
 * Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
 *
 * For example, the input [3, 4, -1, 1] should give 2. The
 * input [1, 2, 0] should give 3.
 *
 * You can modify the input array in-place.
 *
 * I: unsorted array of nums
 * O: lowerst possible positive missing int
 * C: O(n) liner time and O(1) constant space
 * E: empty arr, arr with only negative numbers
 */

const findMissingInt = (arr) => {
  arr = arr.sort((a, b) => a - b);

  let index = 0;
  while (index < arr.length) {
    if (arr[index] > 0) {
      if (arr[index + 1] !== arr[index] + 1) {
        return arr[index] + 1;
      }
    }
    index++;
  }

  return arr[arr.length - 1] + 1;
};

/**
 * Time Complity: O(n^2) Quadratic -> failing constraints at the moment
 *   - O(n log n) -> sort
 *   - O(n) -> while loop
 * Space Complexity: O(1) Constant sorted array is overwritten not copied
 */
console.log(findMissingInt([1, 2, 0]));
