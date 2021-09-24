/* Find the shortest path between two nodes */

// ineffiecient appproach: Floyd Warshall O(n^3)

function findShortestPath(n, edges) {
	let matrix = createAndPopulateMatrix(n, edges);
	// let shortestPath;
	for (let k = 0; k <= n; k++) {
		for (let i = 0; i <= n; i++) {
			for (let j = 0; j <= n; j++) {
        if (i=== j) continue;
				a = (matrix[i][k] === undefined) ? Infinity : matrix[i][k];
				b = (matrix[k][j] === undefined) ? Infinity : matrix[k][j];
				curr = (matrix[i][j] === undefined) ? 0 : matrix[i][j];
        console.log(curr, a, b)
				matrix[i][j] = Math.min(curr, a + b);
			}
		}
	}

	console.log(matrix);
}

function printMatrix(m) {
	let x = '[';
	m.forEach((i) => {
		i.forEach((j) => {
			if (j === undefined) {
				x += ' ,';
			} else {
				x += j + ',';
			}
		});
		console.log(x.slice(0, x.length - 1) + ']');
		x = '[';
	});
}

function createAndPopulateMatrix(n, edges) {
	let x = Array(n)
		.fill()
		.map(() => Array(n).fill());

	//iterate over the matrix and populate
	let u, v, weight;
	edges.forEach((edge) => {
		u = edge[0] - 1;
		v = edge[1] - 1;
		weight = edge[2];

		x[u][v] = weight;
	});
	return x;
}

let n = 4;
let edges = [
	[1, 2, 2],
	[1, 3, 4],
	[1, 4, 15],
	[3, 1, 3],
	[3, 4, 2],
	[4, 3, 7],
	[4, 2, 5],
];
findShortestPath(n, edges);
