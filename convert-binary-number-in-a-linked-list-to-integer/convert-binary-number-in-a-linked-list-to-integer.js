/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let numStr = '';
    
    while(head !== null) {
        numStr += head.val;
        head = head.next;
    }
    
    return parseInt(numStr, 2);
};