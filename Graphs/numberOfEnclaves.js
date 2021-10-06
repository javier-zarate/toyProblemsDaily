/**
 * @param {number[][]} graph
 * @return {number}
 */
const numEnclaves = (graph) => {

	if (graph.length <= 1) return 0;

	let validCells = 0;
	const visited = new Set();

	// skip iteration of the border elements
	for (let r = 1; r < graph.length - 1; r++) {
		for (let c = 1; c < graph[0].length - 1; c++) {
			if (graph[r][c] === 1) {
				let enclaceCount = explore(graph, r, c, visited);
				if (enclaceCount !== Infinity) {
                    validCells += enclaceCount;
                    graph[r][c] = 0;
                }
			}
		}
	}

	return validCells;
};

const explore = (graph, r, c, visited, borderNodes) => {
	// out of bounds
	const rowsInBounds = r >= 0 && r <= graph.length - 1;
	const colsInBounds = c >= 0 && c <= graph[0].length - 1;

	if (!rowsInBounds || !colsInBounds || graph[r][c] === 0) return 0;

	let position = r + ',' + c;
	if (visited.has(position)) return 0;
	visited.add(position);

	let cellCount = 1;

	// boundaries
	if (r === 0 || c === 0 || r === graph.length - 1 || c === graph[0].length - 1) {
		cellCount += Infinity;
	}

	cellCount += explore(graph, r + 1, c, visited);
	cellCount += explore(graph, r - 1, c, visited);
	cellCount += explore(graph, r, c + 1, visited);
	cellCount += explore(graph, r, c - 1, visited);

	return cellCount;
};

// guaranteed

// define the boundaries
// top:     [0, c]
// bottom : [# of rows, c]
// left:    [r, 0]
// right:   [r, # of columns]

let x = [
	[0, 1, 1, 0],
	[0, 0, 1, 0],
	[0, 0, 1, 0],
	[0, 0, 0, 0],
]; // expected: 0
// let y = [
// 	[0, 0, 0, 0],
// 	[1, 0, 1, 0],
// 	[0, 1, 1, 0],
// 	[0, 0, 0, 0],
// ]; // expected: 3
let y = x;
console.log();
console.log(numEnclaves(x)); // expected: 0, 3
console.log(x === y);