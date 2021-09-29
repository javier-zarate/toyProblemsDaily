const connectedComponentsCount = (graph) => {
  const visited = new Set();

  let count = 0;

  for (let node of graph.keys()) {
    if(explore(graph, node, visited)) count++;
  }

  return count;
};

const explore = (graph, current, visited) => {
  if (visited.has(current)) return false;

  visited.add(current);
  for (let neighbor of graph.get(current)) {
    explore(graph, neighbor, visited);
  }

  return true;
};

const graph = {
	0: [8, 1, 5],
	1: [0],
	5: [0, 8],
	8: [0, 5],
	2: [3, 4],
	3: [2, 4],
	4: [3, 2],
};

const Graph = require('./graph.js');
let list = new Graph();

for(let key in graph) {
  list.addVertex(Number(key));
}

for(let [key, value] of Object.entries(graph)) {
  if (list.adjacencyList.has(Number(key))) {
    list.adjacencyList.set(Number(key), value);
  }
}

let count = connectedComponentsCount(list.adjacencyList)
console.log(count) // answer 2