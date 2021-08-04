/**
 * Source: leetcode
 *
 * Prompt: Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Notice that you should not modify the linked list.


 */


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
  // empty list or single node only (no cycle)
  if (head === null || head.next === null) return null;

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) {
      break;
    }
  }

  if (slow != fast) return null;

  slow = head;

  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};


// Test Cases:
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// head = [3,2,0,-4] // NODE 2
let head = new ListNode(3)
let node2 = new ListNode(2)
let node3 = new ListNode(0)
let node4 =  new ListNode(-4)
head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2

console.log(detectCycle(head));


// head = [1,2] // NODE 1
let h1 = new ListNode(1)
let n2 = new ListNode(2);
h1.next = n2;
n2.next = h1;

console.log(detectCycle(h1));

// head = [1] // NO CYCLE

let h2 = new ListNode(1);
console.log(detectCycle(h2));

// Time Complexity:
 // O(n) - Entire list may be traversed
// Space Complexity:
  // O(1) - List is not being store in additional data structure