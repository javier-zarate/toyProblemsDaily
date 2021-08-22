/*
 *
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 *
 * Source: hackerrank
 *
 * Prompt:
 *
 * Given a  2D Array: 6 x 6
 *
 * // Example 1
// arr[i][j] =
// [
//   [ 1, 1, 1, 0, 0, 0 ],
//   [ 0, 1, 0, 0, 0, 0 ],
//   [ 1, 1, 1, 0, 0, 0 ],
//   [ 0, 0, 2, 4, 4, 0 ],
//   [ 0, 0, 0, 2, 0, 0 ],
//   [ 0, 0, 1, 2, 4, 0 ]
// ]
 * an Hourglass is a subset with this pattern in array
// 1 1 1
//   1
// 1 1 1

// example:
// Example 1
// arr[i][j] =
// [
//   [ 1, 1, 1, 0, 0, 0 ],
//   [ 0, 1, 0, 0, 0, 0 ],
//   [ 1, 1, 1, 0, 0, 0 ],
//   [ 0, 0, 2, 4, 4, 0 ],
//   [ 0, 0, 0, 2, 0, 0 ],
//   [ 0, 0, 1, 2, 4, 0 ]
// ]

// The sum of this first hourglass is 7
// all hourglass combinations
1 1 1     1 1 0     1 0 0     0 0 0
  1         0         0         0
1 1 1     1 1 0     1 0 0     0 0 0

0 1 0     1 0 0     0 0 0     0 0 0
  1         1         0         0
0 0 2     0 2 4     2 4 4     4 4 0
1 1 1     1 1 0     1 0 0     0 0 0
  0         2         4         4
0 0 0     0 0 2     0 2 0     2 0 0
0 0 2     0 2 4     2 4 4     4 4 0
  0         0         2         0
0 0 1     0 1 2     1 2 4     2 4 0

The sum of each hourglass from left to right, top to bottom:
7     4     2     0
4     8     10    8
3     6     7     6
3     9     19    14

The larges value of all the hourglasses:
19

Return the largest hourglass
 */

function hourglassSum(arr) {
	let max;

	for (let i = 0; i <= arr.length / 2; i++) {
		for (let j = 0; j <= arr.length / 2; j++) {
			let sum = hgSum(arr, i, j);
			if (max === undefined) {
				max = sum;
			}
			max = max < sum ? sum : max;
		}
	}
	return max;
}

function hgSum(arr, i, j) {
	return (
		arr[i][j] +
		arr[i][j + 1] +
		arr[i][j + 2] +
		arr[i + 1][j + 1] +
		arr[i + 2][j] +
		arr[i + 2][j + 1] +
		arr[i + 2][j + 2]
	);
}

