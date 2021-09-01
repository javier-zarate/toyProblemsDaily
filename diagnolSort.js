/**
 * Source: Online Coding Challenge (for Interview)
 *
 * Prompt: (as remembered by memory)
 *
 * You are given a square matrix of positive ints. Sort each diagnol parrallel to the
 * *secondary diagnal*. The numbers are sorted in ascending order from bottom left to top right.
 *
 * **secondary Diagnaol: set of elements in a square matrix that run from uppr-right corner to
 * lower left corner.
 *
 * for matrix(a) of size n the secondary diagnal is a[i][n - 1 -i]
 *
 * For example:
 * a = [
 *  [1,3,9,4],
 *  [9,5,7,7],
 *  [3,6,9,7],
 *  [1,2,2,2]
 * ]
 *
 * diagnals parralel to secondary diagnal
 * - 1
 * - 9,3
 * - 9,5,3
 * - 4,7,6,1
 * - 7,9,2
 * - 7,2
 * - 2
 *
 * sorted diagnals is ascending order from bottom left to top right
 * - 1
 * - 3,9
 * - 3,5,9
 * - 1,4,6,7
 * - 2,7,9
 * - 2,7
 * - 2
 *
 * resulting matrix:
 *
 * a = [
 *  [1,9,9,7],
 *  [3,5,6,9],
 *  [3,4,7,7],
 *  [1,2,2,2]
 * ]
 */

function diagnalSort(a) {
	let diag = 0;
	let x = a.length + 1;
	//start by traversing the all possible diagnols

	while (diag < a.length * 2) {
		for (let i = 0; i < a.length; i++) {
			for (let j = 0; j < a.length; j++) {
				if ((i + j) === a.length - x) {
					console.log(a[i][j]);
				}
			}
		}
		console.log('----------------')
		diag++;
		x--;
	}
	// if ((i + j) === a.length - 1) {
	// 	console.log(a[i][j])
	// }
	// if ((i + j) === a.length - 2) {
	// 	console.log(a[i][j])
	// }
	// if ((i + j) === a.length - 3) {
	// 	console.log(a[i][j])
	// }
	// if ((i + j) === a.length - 4) {
	// 	console.log(a[i][j])
	// }
	// if ((i + j) === a.length) {
	// 	console.log(a[i][j])
	// }
	// if ((i + j) === a.length + 1) {
	// 	console.log(a[i][j])
	// }
	// if (i + j === a.length + 2) {
	// 	console.log(a[i][j]);
	// }
}

/* TEST */
let matrix = [
	[1, 3, 9, 4],
	[9, 5, 7, 7],
	[3, 6, 9, 7],
	[1, 2, 2, 2],
];

let m2 = [
	[1, 3, 9],
	[9, 5, 2],
	[3, 6, 9],
];

let m3 = [
	[1, 3, 9, 4, 5],
	[9, 5, 7, 7, 5],
	[3, 6, 9, 7, 5],
	[1, 2, 2, 2, 5],
	[3, 6, 9, 7, 5],
];


diagnalSort(m3);

/* result
matrix = [
	[1, 9, 9, 7],
	[3, 5, 6, 9],
	[3, 4, 7, 7],
	[1, 2, 2, 2],
];
*/
