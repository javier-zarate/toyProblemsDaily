/* Find the shortest path between two nodes */

// ineffiecient appproach: Floyd Warshall O(n^3)

function findShortestPath(n, edges, start, end) {
	let matrix = createAndPopulateMatrix(n, edges);
	matrix = findAllShortestPaths(matrix);
	printMatrix(matrix);

	let pathResult = matrix[start - 1][end - 1];

	return pathResult === Infinity ? -1 : pathResult;
}

function findAllShortestPaths(matrix) {
	for (let k = 0; k < n; k++) {
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
				if (i === j) {
					matrix[i][j] = 0;
				}

				a = matrix[i][k];
				b = matrix[k][j];

				matrix[i][j] = Math.min(matrix[i][j], a + b);
			}
		}
	}
	return matrix;
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
		.map(() => Array(n).fill(Infinity));

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

console.log(findShortestPath(n, edges, 1, 4));
