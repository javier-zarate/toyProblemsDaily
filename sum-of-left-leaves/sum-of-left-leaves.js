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
var sumOfLeftLeaves = function(root) {
    // need to traverse the tree
    // only sum up LEFT leaves
    // determine what constitutes a leaf
    let stack = [root];
    let total = 0;
    
    while (stack.length !== 0) {
        let node = stack.pop();
        
        if (node.left && isLeaf(node.left)) total += node.left.val;
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    return total;
};
    
const isLeaf = (node) => {
    // leave must not be null
    // must not have children
    return node !== null && node.left === null && node.right === null;
};