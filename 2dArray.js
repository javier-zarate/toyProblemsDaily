/**
 * Source: Hackerrank
 *
 * Given a 6 x 6 2D Array, arr :

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
An hourglass is a subset of values with indices falling in this pattern in arr's graphical representation:

a b c
  d
e f g

There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6 x 6.

Example


-9 -9 -9  1 1 1
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0

The 16 hourglass sums are:

-63, -34, -9, 12,
-10,   0, 28, 23,
-27, -11, -2, 10,
  9,  17, 25, 18
The highest hourglass sum is 28 from the hourglass beginning at row 1, column 2:

0 4 3
  1
8 6 6

Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

Function Description

Complete the function hourglassSum in the editor below.

hourglassSum has the following parameter(s):

int arr[6][6]: an array of integers

Returns
int: the maximum hourglass sum

Constraints
-9 <= arr[i][j] <= 9,
0 <= i,j <= 5

Output Format
Print the largest (maximum) hourglass sum found in arr.
 */

function hourglassSum(arr) {
	let max = -63;

	for (let i = 0; i < arr.length - 2; i++) {
		for (let j = 0; j < arr[i].length - 2; j++) {
			let hourglass_sum =
				arr[i][j] +
				arr[i][j + 1] +
				arr[i][j + 2] +
				arr[i + 1][j + 1] +
				arr[i + 2][j] +
				arr[i + 2][j + 1] +
				arr[i + 2][j + 2];

			if (hourglass_sum > max) max = hourglass_sum;

			hourglass_sum = 0;
		}
	}
	return max;
}

let test = [
	[-1, -1, 0, -9, -2, -2],
	[-2, -1, -6, -8, -2, -5],
	[-1, -1, -1, -2, -3, -4],
	[-1, -9, -2, -4, -4, -5],
	[-7, -3, -3, -2, -9, -9],
	[-1, -3, -1, -2, -4, -5],
];

console.log(hourglassSum(test));

/*Time Complexity: O(n * m)
- technically O(n -2 * m - 2) for this specific problem;
Space Complexity: O(1)
*/