const minimumIsland = (grid) => {
	let count = 0;

	const visited = new Set();

	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[0].length; c++) {
			if (explore(grid, r, c, visited)) count++;
		}
	}
	return count;
};

const explore = (grid, r, c, visited) => {
  // check if you are wihtin bound
  const rowInBounds = 0 <= r && r < grid.length;
  const colInBounds = 0 <= c && c < grid[0].length;
  if (!rowInBounds || !colInBounds) return false;

  if (grid[r][c] === 'W') return false;

  const pos = r + ',' + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  // explore each direction;
  explore(grid, r - 1, c, visited) // up
  explore(grid, r, c - 1, visited) // left
  explore(grid, r + 1, c, visited) // down
  explore(grid, r, c + 1, visited) // right

  return true;
};

const grid = [
	['W', 'L', 'W', 'W', 'W'],
	['W', 'L', 'W', 'W', 'W'],
	['W', 'W', 'W', 'L', 'W'],
	['W', 'W', 'L', 'L', 'W'],
	['L', 'W', 'W', 'L', 'L'],
	['L', 'L', 'W', 'W', 'W'],
];

console.log(minimumIsland(grid));