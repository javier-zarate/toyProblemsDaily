/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    // create a map to keep track of all the already seen square
    // update the max land var after each patch is fully traversed
    // use depth first search to see the traverse the path of land
    
    // at end of traversal of each square return max
    
    let visited = new Set(); 
    let maxArea = 0; 
    
    for(let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === 1) {
                let landArea = explore(grid, r, c, visited, 0); 
                maxArea = Math.max(maxArea, landArea);
            }
        }
    }
    return maxArea;

};

const explore = (grid, r, c, visited, area) => {
    // base case
    // out of bounds 
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[r].length || grid[r][c] === 0) return 0; 
    
    // already visited
    let node = r + ',' + c;
    if (visited.has(node)) return 0;
    visited.add(node);
    
    area = 1;
    
    area += explore(grid, r + 1, c, visited, area);
    area += explore(grid, r - 1, c, visited, area);
    area += explore(grid, r, c + 1, visited, area);
    area += explore(grid, r, c - 1, visited, area);
    
    return area;
};