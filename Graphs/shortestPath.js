const shortestPath = (edges, nodeA, nodeB) => {
  const graph = createGraph(edges);
  console.log(graph)

  const queue = [ [nodeA, 0] ];
  const visited = new Set([ nodeA ]);

  while(queue.length > 0) {
    const [ node, distance ] = queue.shift();

    if (node === nodeB) return distance;


    for (let neighbor of graph.get(node)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return - 1;
};

const createGraph = (edges) => {
  const graph = new Map();

  for(let [u, v] of edges) {
    if (!graph.has(u)) {
      graph.set(u, []);
    }
    if (!graph.has(v)) {
      graph.set(v, []);
    }
    graph.get(u).push(v);
    graph.get(v).push(u);
  }

  return graph;
};

const edges = [
	['w', 'x'],
	['x', 'y'],
	['z', 'y'],
	['z', 'v'],
	['w', 'v'],
];

let x = shortestPath(edges, 'w','z');
console.log(x);
