class Graph {
  constructor()  {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!(this.adjacencyList.has(vertex))) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addUndirectedEdge(u, v) {
    if (!this.adjacencyList.has(u)) {
      this.addVertex(u);
    }
    if (!this.adjacencyList.has(v)) {
      this.addVertex(v);
    }
    this.adjacencyList.get(u).push(v);
    this.adjacencyList.get(v).push(u);
  }

  addDirectedEdge(u, v) {
    if (!this.adjacencyList.has(u)) {
      this.addVertex(u);
    }
    this.adjacencyList.get(u).push(v);
  }

  removeEdge(u, v) {
    const uFilter = this.adjacencyList.get(u).filter(node => node !== v);
    const vFilter = this.adjacencyList.get(v).filter(node => node !== u);
    this.adjacencyList.set(u, uFilter);
    this.adjacencyList.set(v, vFilter);
  }

  removeVertex(vertex) {
    this.adjacencyList.delete(vertex);
  }
}

// breadth first  search traversal
// search "level by level"
// result shows the nodes traversed
Graph.prototype.bfs = function(start) {
  const queue = [start];
  const result = [];
  const visited = {};
  visited[start] = true;

  while (queue.length) {
    currentVertex = queue.shift();
    result.push(currentVertex);

    this.adjacencyList.get(currentVertex).forEach(neighbor => {
      console.log(neighbor)
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    });
  }

  return result;
}


// Depth First Search
// going "DOWN" the graph then back tracking and repeating
Graph.prototype.dfsRecursive = function(start) {
  let result = [];
  let visited = {};
  let stack = [];

  const adjacencyList = this.adjacencyList;

  (function dfs(vertex) {
    if (!vertex) return null;

    visited[vertex] = true;
    result.push(vertex);

    adjacencyList.get(vertex).forEach(neighbor => {
      if (!visited[neighbor]) {
        return dfs(neighbor);
      }
    });
  })(start);
  return result;

  console.log(this.adjacencyList.get(start));
  return 'heeey';
}

let graph = new Graph();

graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
graph.addUndirectedEdge(1,2)
graph.addUndirectedEdge(2,3)
graph.addUndirectedEdge(3,4)
graph.addUndirectedEdge(1,4)

// console.log(graph)

// graph.removeEdge(1,4);
// console.log(graph)

// console.log(graph.bfs(1))
// console.log(graph)
console.log(graph.dfsRecursive(1))