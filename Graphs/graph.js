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

console.log(graph)

graph.removeEdge(1,4);
console.log(graph)

graph.removeVertex(1);
console.log(graph);