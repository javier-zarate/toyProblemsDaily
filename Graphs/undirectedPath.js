const Graph = require('./graph.js');
// this graph CAN have a cycle
// you are provided and edge list
const undirectedPath = (edges, src, dest) => {
  let graph = createGraph(edges);

  return hasPath(graph, src, dest, new Set());

};

const hasPath = (graph, src, dest, visited) => {
  if (src === dest) return true;

  if (visited.has(src)) return false;
  visited.add(src);

  for (let neighbor of graph.get(src)) {
    if (hasPath(graph, neighbor, dest, visited)) return true;
  }
  return false;
};

// create graph from graph class
const createGraph = (edges) => {
	let graph = new Graph();

	for (let edge of edges) {
		let [left, right] = edge;

		graph.addUndirectedEdge(left, right);
	}
	return graph.adjacencyList;
};

// practice building graph from edges
const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
		let [u, v] = edge;

		if (!(u in graph)) {
      graph[u] = [];
    }
    graph[u].push(v);

		if (!(v in graph)) {
      graph[v] = [];
    }
    graph[v].push(u);
	}
  return graph;
}

const edges = [
	['i', 'j'],
	['k', 'i'],
	['m', 'k'],
	['k', 'l'],
	['o', 'n'],
];

let x = undirectedPath(edges,'j', 'm');
console.log(x);
