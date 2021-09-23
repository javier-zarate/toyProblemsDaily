/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
var validPath = function(n, edges, start, end) {
    // if the path we are looking for is the start then return true; 
    if (start === end) return true; 
    
    // adjList contains list of nodes and their connections(edges)
    let graph = {}; 
    
    edges.forEach(edge => {
        u = edge[0]; 
        v = edge[1]; 
        
        if (!(u in graph)) {
            graph[u] = [];
        }
        graph[u].push(v);
        
        if (!(v in graph)) {
            graph[v] = [];
        }
        graph[v].push(u);
    }); 
    
    // traverse the graph and note the visited nodes 
    // create a flag for pathfound
    let seen = new Set(); 
    let pathFound = false; 
    
    function traverse(node) {
        if (node === end) {
            pathFound = true;
        } else {
            loop(node); 
        }
    }
    
    function loop(node) {
        seen.add(node); 
        for(n of graph[node]) {
            if (!(seen.has(n))) {
                traverse(n);
            } 
            if (pathFound) return; 
        }
    }
    
    traverse(start);
    return pathFound;
};