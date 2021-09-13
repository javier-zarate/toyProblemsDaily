/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let cycleExist = confirmCycle(head);
    
    if (cycleExist) {
        let cycleLength = findCycleLength(cycleExist);
        return findCycleStart(cycleLength, head);
    } 
    
    return null;
    
    
};

const confirmCycle = function(head) {
    let slow = head, fast = head;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
           return slow;
        }
    }
    
    return false;
}

const findCycleLength = function(slow) {
    let current = slow;
    let cycleLength = 0;
    
    while (true) {
        current = current.next;
        cycleLength++;
        if (slow === current) {
            break;
        }
    }
    
    return cycleLength;
}

const findCycleStart = function(cycleLength, head) {
    let pointer1 = head, pointer2 = head;
    
    let i = 0;
    while (i < cycleLength) {
        pointer1 = pointer1.next;
        i++;
    }
    
    while (pointer1 !== pointer2) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }
    
    return pointer1;
}




