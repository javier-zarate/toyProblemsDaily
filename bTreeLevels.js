// Source: Daily Coding Problem
/**
 * This problem was asked by Microsoft.
 * Print the nodes in a binary tree level-wise.
 * For example, the following should print 1, 2, 3, 4, 5.
 *      1
 *     / \
 *    2   3
 *   / \
 *  4   5
 */

const levels = (root) => {
  // I: tree node
  // O: console log of each node by levels going from right to left
  // C: Tree node structure, traverse tree per level, tree is binary
  // E: empty tree.

  // the tree needs to be travesed in the breadth first search pattern
  // the root node will be added to a queue then the search is set in motion
  // in a loop the next queued item will be stored in a var to reference the value and removed from queue
  // that variable will be checked for a left and rtight node, if they exist they will be added to the queue
  // att the bottom of the loop the value of the node which was just removed will be printed to the screen
  // this process will repeat until the queue is empty

  // start with edge cases
  if (root === undefined) {
    console.log('empty tree / invalid input');
    return;
  }

  // use array as queue
  let queue = [root];

  // loop through the queue until it is empty
  while (queue.length > 0) {
    let currNode = queue.shift();

    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);

    console.log(currNode.val);
  }
  return;
}

// Test tree
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

levels(root); // should print out in order 1,2,3,4,5,6,7
levels(); // should pring out 'empty tree / invalid input';

// Time Complexity:
// O(n) -> Size of tree will be traversed in everycase
// Space Complexity:
// - Not as straight forward since the tree is being traversed by levels
// - O(w) - w being width. The largest level of the tree will be stored on the queue
//   at one point.
