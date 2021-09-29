/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */

var maxProbability = function(n, edges, succProb, start, end) {
    let graph = buildGraph(edges, succProb);
    
    //edge cases
    //starting node is not in graph
    if (graph.get(start) === undefined) return 0;
    
    // add visited set to avoid infinity loop
    const visited = new Set();
    const queue = [[start, 1.0]]; // starting node and 100% prob
    
    while (queue.length > 0) {
        let [node, prob] = queue.shift(); 
        
        if (visited.has(node)) continue;
        visited.add(node);
        
        if (node === end) {
            return prob;
        }
        
        for(let [neighbor, neighborProb] of graph.get(node)) {
            // start accruing prob with each node 
            queue.push([neighbor, neighborProb * prob]);
        }
        
        // Where the Magic happens
        // sort queue in descending order to visit nodes by highest prob
        queue.sort((a,b) => b[1] - a[1]);
    }
    // no path was found thus 0 prob
    return 0;
};

const buildGraph = (edges, succProb) => {
    const map = new Map(); 
    
    for (let index in edges) {
        let [u, v] = edges[index]; 
        
        if(!map.has(u)) {
            map.set(u, []);
        }
        map.get(u).push([v, succProb[index]]);
        
        if(!map.has(v)) {
            map.set(v, []);
        }
        map.get(v).push([u, succProb[index]]);
    }
    return map;
};