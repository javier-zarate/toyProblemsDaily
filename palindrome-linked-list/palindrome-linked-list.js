/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // helper function to reverse second half of list
    const reversed = (head) => {
        let next = null, prev = null;
        
        while(head !== null) {
            next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        } 
        return prev;
    }
    
    let fast = head, slow = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    fast = head;
    slow = reversed(slow);
    
    while (slow !== null) {
        if (slow.val !== fast.val) return false;
        slow = slow.next;
        fast = fast.next;
    }
    
    return true;
    
};