const { list } = require('./connectedComponents.js');

const largestComponent = (graph) => {
  let largestComponentCount = 0;

  const visited = new Set();

  for (let node of list.keys()) {
    let result = explore(graph, node, visited);
    largestComponentCount = Math.max(largestComponentCount, result);
  }
  return largestComponentCount;
};

const explore = (graph, current, visited) => {
  if (visited.has(current)) {
    return 0;
  }

  visited.add(current);

  let size = 1;
  for(let neighbor of graph.get(current)) {
    size += explore(graph, neighbor, visited);
  }

  return size;
}

console.log(largestComponent(list))
