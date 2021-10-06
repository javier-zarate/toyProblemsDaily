/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
	if (grid.length <= 1) return 0;

	let validCells = 0;
	const visited = new Set();

	// skip iteration of the border elements
	for (let r = 1; r < grid.length - 1; r++) {
		for (let c = 1; c < grid[0].length - 1; c++) {
			if (grid[r][c] === 1) {
				let enclaceCount = explore(grid, r, c, visited);
				enclaceCount = enclaceCount === Infinity ? 0 : enclaceCount;
				validCells += enclaceCount;
			}
		}
	}

	return validCells;
};

const explore = (grid, r, c, visited, borderNodes) => {
	// out of bounds
	const rowsInBounds = r >= 0 && r <= grid.length - 1;
	const colsInBounds = c >= 0 && c <= grid[0].length - 1;

	if (!rowsInBounds || !colsInBounds || grid[r][c] === 0) return 0;

	let position = r + ',' + c;
	if (visited.has(position)) return 0;
	visited.add(position);

	let cellCount = 1;

	// boundaries
	if (r === 0 || c === 0 || r === grid.length - 1 || c === grid[0].length - 1) {
		cellCount += Infinity;
	}

	cellCount += explore(grid, r + 1, c, visited);
	cellCount += explore(grid, r - 1, c, visited);
	cellCount += explore(grid, r, c + 1, visited);
	cellCount += explore(grid, r, c - 1, visited);

	return cellCount;
};