const { list } = require('./connectedComponents.js');
// assuming we are given a graph
// ex:
/**
 *
Map {
  0 => [ 8, 1, 5 ],
  1 => [ 0 ],
  2 => [ 3, 4 ],
  3 => [ 2, 4 ],
  4 => [ 3, 2 ],
  5 => [ 0, 8 ],
  8 => [ 0, 5 ]
}

// components visual
        0----8
      /   \  |
     /     \ |
    /       \|
    1       5

      3---2
      |  /
      | /
      |/
      4
 */

const largestComponent = (graph) => {
  let largest = 0;
  const visited = new Set();

  for(let node of graph.keys()) {
    largest = Math.max(largest, explore(graph, node, visited));
  }

  return largest;
};

// using a DFS recursively, using the Call stack as our stack
const explore = (graph, node, visited) => {
  if (visited.has(node)) return 0;

  visited.add(node);

  let size = 1;

  for(const neighbor of graph.get(node)) {
    size += explore(graph, neighbor, visited);
  }

  return size;
};

console.log(largestComponent(list)); // 4

// 0 => [8, 5, 1]
//             ^
// v -> 0
//           ^
// s=> 1 + 2 + 0 +  1
// r 4

// 8 => [0,5]
//         ^
// v-> 0, 8
// s -> 1 + 0 + 1
// r ???

// 5 => [0, 8]
//       ^
// v => 0, 8, 5
// s => 1 + 0  + 0

// 1 => [0]
//       ^
// v => 0, 8, 5
// s = 1


/*
        0----8
      /   \  |
     /     \ |
    /       \|
    1       5

      3---2
      |  /
      | /
      |/
      4
 */