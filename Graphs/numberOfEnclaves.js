/**
 * @param {number[][]} grid
 * @return {number}
 */
 var numEnclaves = function(grid) {
  if (grid.length <= 1) return 0;

  let validCells = 0;
  const visited = new Set();
  let connectedToBoundary = false;


  for (let r = 0; r < grid.length; r++) {
      for(let c = 0; c < grid[0].length; c++) {
          if (grid[r][c] === 1) {
              let res = explore(grid, r, c, visited, connectedToBoundary, 0)
              if (!res) validCells += res;

          }
          connectedToBoundary = false;
      }
  }

  return validCells;
};

const explore = (grid, r, c, visited, connectedToBoundary, validCells) => {
  // out of bounds
  const rowsInBounds = (r >= 0) && (r <= grid.length - 1);
  const colsInBounds = (c >= 0) && (c <= grid[0].length - 1);

  if (!rowsInBounds || !colsInBounds) return false;

  if (grid[r][c] === 0) return false;

  let position = r + ',' + c;
  if (visited.has(position)) return false;
  visited.add(position);

  // boundaries
  if (r === 0  || c === 0 || r === grid.length - 1 || c === grid[0].length - 1) {
      connectedToBoundary = true;
  }

  validCells++;

  let w = explore(grid, r + 1, c, visited, connectedToBoundary, validCells);
  let x = explore(grid, r - 1, c, visited, connectedToBoundary, validCells);
  let y = explore(grid, r, c + 1, visited, connectedToBoundary, validCells);
  let z = explore(grid, r, c - 1, visited, connectedToBoundary, validCells);

  w = (typeof w === false) ? 0 : w;
  x = (typeof x === false) ? 0 : x;
  y = (typeof y === false) ? 0 : y;
  z = (typeof z === false) ? 0 : z;

  validCells += w + x + y + z;

  return !connectedToBoundary ?  false : validCells;
}

// guaranteed


// define the boundaries
// top:     [0, c]
// bottom : [# of rows, c]
// left:    [r, 0]
// right:   [r, # of columns]