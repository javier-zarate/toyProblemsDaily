/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if (grid.length < 0) return 0;
    
    const visited = new Set(); 
    let maxArea = 0; 
    
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 1) {
                maxArea = Math.max(maxArea, explore(grid, r, c, visited));   
            }
        }
    }
    
    return maxArea;
};

const explore = (graph, r, c, visited) => {
    // base cases
    // in bounds
    if (r < 0 || c < 0 || r >= graph.length || c >= graph[0].length || graph[r][c] === 0) {
        return 0;
    }
    
    // already seen
    const position = r + ',' + c;
    if (visited.has(position)) return 0;
    visited.add(position);
    
    let count = 1; 
    
    count += explore(graph, r + 1, c, visited);
    count += explore(graph, r - 1, c, visited);
    count += explore(graph, r, c + 1, visited);
    count += explore(graph, r, c - 1, visited);
    
    return count; 
};