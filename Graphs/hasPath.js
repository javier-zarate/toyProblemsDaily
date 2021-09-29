// take in adjacency list representing a graph
// graph is directed
// this partical graph is acyclic meaning there is no loops

// implementation using depthfirst travesal RECURSIVE
const hasPath = (graph, src, dest) => {
	if (src === dest) return true;

	for (let neighbor of graph[src]) {
		if (hasPath(graph, neighbor, dest) === true) {
			return true;
		}
	}

	return false;
};

// again assuming the graph is acyclic
const hasPathBFS = (graph, src, dest) => {
  let queue = [ src ];

  while (queue.length > 0) {
    let current = queue.shift();

    if (current === dest) return true;

    for(let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};

const graph = {
	'a': ['c', 'b'],
	'b': ['d'],
	'c': ['e'],
	'd': ['f'],
	'e': [],
	'f': [],
};

let x = hasPath(graph, 'c', 'f');
let y = hasPath(graph, 'a', 'f');
let a = hasPathBFS(graph, 'c', 'f');
let b = hasPathBFS(graph, 'a', 'f');
console.log(x, y, a, b)