/**
 * Source: leetcode
 *
 * Prompt: https://leetcode.com/problems/magic-squares-in-grid/
 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
	if (grid.length > 3) {
		return 0;
	}

	const rowLength = grid.length;
	const colLength = grid[0].length;

	let magicGridCount = 0;

	for (let r = 0; r < rowLength; r++) {
		for (let c = 0; c < colLength; c++) {
			validSize = magicSize(grid, r, c, rowLength);
			if (validSize) {
				// magicGridCount += (magicSquareValidator(validSize)) ? 1 : 0;
			}
		}
	}

	return magicGridCount;
};

var magicSize = function (grid, r, c, rowLength) {
	// if topRight and bottomLeft exist there is at least a 3 x 3 available
	let topRight = grid[r][c + 2];
	let bottomLeft = r + 2 >= rowLength ? undefined : grid[r + 2][c];

	if (topRight !== undefined && bottomLeft !== undefined) {
		let threeByThree = [];
		for (let i = r; i <= r + 2; i++) {
			row = [];
			for (let j = r; j <= r + 2; j++) {
				row.push(grid[i][j]);
			}
			threeByThree.push(row);
		}
		return threeByThree;
	}
	return false;
};

var magicSquareValidator = function (square) {
	// calculate
	// up, down, leftDiag, rightDiag
	// first Calc sets magicSum
	// at any calc a sum differs from set magics sum
	// quit and return false
	// else all sums match
	// return true
};

// intput: matrix of row by col size
// output: int, number of magic squares
// constraints: row and col min 1 max 10;
// grid nums 1 - 9
// edge cases:
// - grid smaller then 3x3
// -
