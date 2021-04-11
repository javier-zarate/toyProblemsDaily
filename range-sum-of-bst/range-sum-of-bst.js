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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let queue = [root];
    let total = 0;
    
    while(queue.length !== 0) {
        let out = queue.pop();
        if (out.val >= low && out.val <= high) total += out.val;
        if (out.left !== null) queue.push(out.left);
		if (out.right !== null) queue.push(out.right);
    }
    return total;
};