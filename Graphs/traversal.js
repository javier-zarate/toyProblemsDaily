const Graph = require('./graph.js');

// prints nodes in depth first order ITERATIVELY
const dftIterative = (graph, source) => {
  const stack = [ source ];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    for (let neighbor of graph.get(current)) {
      stack.push(neighbor);
    }
  }
};

const dftRecursive = (graph, source) => {
  console.log(source);
  // IMPLICIT BASE CASE
  // when there is no neighbors there is no recursive calls
  for (let neighbor of graph.get(source)) {
    dftRecursive(graph, neighbor);
  }
};

const bftIterative= (graph, source) => {
  const queue = [ source ];

  while (queue.length > 0) {
    let current = queue.shift();
    console.log(current);

    for (let neighbor of graph.get(current)) {
      queue.push(neighbor);
    }
  }
};



let graph = new Graph();

graph.addVertex('a');
graph.addVertex('b');
graph.addVertex('c');
graph.addVertex('d');
graph.addVertex('e');
graph.addVertex('f');
graph.addDirectedEdge('a', 'c');
graph.addDirectedEdge('a','b');
graph.addDirectedEdge('b','d');
graph.addDirectedEdge('c','e');
graph.addDirectedEdge('d','f');

console.log(graph);
let adjacencyList = graph.adjacencyList;

// dftIterative(adjacencyList, 'a');
// console.log('\n')
// dftRecursive(adjacencyList, 'a');

bftIterative(adjacencyList, 'a');
