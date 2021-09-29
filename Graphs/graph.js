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

module.exports = Graph;