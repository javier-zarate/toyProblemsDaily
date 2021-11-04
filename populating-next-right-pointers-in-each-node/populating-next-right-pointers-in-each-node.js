/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root === null) return root;
    
    let queue = [root]; 
    
    while(queue.length > 0) {
        
        let size = queue.length; 
    
        for(let i = 0; i < size; i++) {
            let currentNode = queue.shift();
            
            if(i < size - 1) {
                currentNode.next = queue[0];
            }
            
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
            
        }
    }
    
    return root;
};