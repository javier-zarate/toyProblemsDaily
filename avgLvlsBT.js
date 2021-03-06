/* Source: leetCode, March LeetCoding Challenge 2021

Prompt:
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].

Note:
The range of node's value is in the range of 32-bit signed integer.

I: root node of B Tree
O: array with averages per level
C: The range of node's value is in the range of 32-bit signed integer.
E: empty tree, tree of only root

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var averageOfLevels = function(root) {
  if (root === undefined) {
    return;
  }

  // initialize queue with root
  // and null value to keep track of 1st level
  let queue = [root, null];

  // keep track on number of nodes per lever and
  // sum of nodes per level,
  // aswell as the averages
  let nodesPerLevel = 0;
  let sumPerLevel = 0;
  let averages = [];

  // iterate throught the the tree
  while(queue.length > 0) {
    let currentNode = queue.shift();

    // check for null indicating new level
    // add average and reset values
    if (currentNode === null) {
      averages.push(sumPerLevel/nodesPerLevel);
      sumPerLevel = 0;
      nodesPerLevel = 0;
      // add another null value signaling new level
      queue.push(null);

      // if the null value is the only value in queue
      // the end has been reached
      if (queue[0] === null) {
        break;
      }
    }

    // if current is not end of level aka null
    // calculate values and add children
    if (currentNode !== null) {
      sumPerLevel += currentNode.val;
      nodesPerLevel += 1;

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  return averages;
};

/*
  Time Complexity: O(n) - linear
   - reading node data and writting to queue is O(1)
   - each node is visited thus depends on length of tree -> n
  Space Complexity: O(n + n) - linear -> O(n)
    - in the worst case we have an unbalanced tree with for example only
      left children at each node this we add a null value to queue per
      level n nodes, n levels, n null values
*/

// tests
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

console.log(averageOfLevels(root));
/* expected:
  [1, 2.5, 5.5]
*/
