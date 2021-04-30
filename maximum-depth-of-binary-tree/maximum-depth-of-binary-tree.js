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
 * @return {number}
 */
var maxDepth = function(root) {
    depthFinder = (root, level) => {
      if (!root) return level;
      return Math.max(depthFinder(root.left, level + 1), depthFinder(root.right, level + 1));
      
    }
    
    return depthFinder(root, 0);
};