/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (board === null || board.length === 0 || board[0].length === 0) return;
  for (let i = 0; i< board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (i === 0 || j === 0 || i === board.length - 1 || j === board[0].length -1) {
        dfs(board, i, j);
      }
    }
  }
  
  for (let i = 0; i< board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'T') {
        board[i][j] = 'O';
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
    }
  }
};

function dfs(board, row, col) {
  if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) return;
  if (board[row][col] === 'O') {
    board[row][col] = 'T';
    dfs(board, row + 1, col);
    dfs(board, row - 1, col);
    dfs(board, row, col - 1);
    dfs(board, row, col + 1);
  }
}