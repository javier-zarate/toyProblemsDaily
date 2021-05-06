/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
   const start = new ListNode(0, head);
    let pre = start;
    for (let i = 1; i < left; i++) {
        pre = pre.next;
    }
    let current = pre.next;
    
    for (let i = 0; i < right - left; i++) {
        let NEXT = current.next;
        current.next = NEXT.next;
        NEXT.next = pre.next;
        pre.next = NEXT;
    }
    
    return start.next;
};