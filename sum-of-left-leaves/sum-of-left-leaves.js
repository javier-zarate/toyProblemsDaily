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
    let stack = [root]; 
    let sum = 0; 
    
    while (stack.length > 0) {
        node = stack.pop(); 
        
        if (isLeaf(node.left)) sum += node.left.val;
        if (node.right) stack.push(node.right); 
        if (node.left) stack.push(node.left);
    }
    
    return sum; 
};
    
const isLeaf = (node) => {
    return node !== null && node.left === null && node.right === null;  
};