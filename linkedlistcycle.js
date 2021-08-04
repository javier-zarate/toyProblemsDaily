/**
 * Source: leetcode
 *
 * Prompt: Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false
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
 * @return {boolean}
 */
 var hasCycle = function(head) {

  if (head === null) return false;

  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
        slow = slow.next;

        fast = fast.next.next;

        if (slow == fast) return true;

  }
  return false;
};

// Test Cases:
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// head = [3,2,0,-4] // true
let head = new ListNode(3)
let node2 = new ListNode(2)
let node3 = new ListNode(0)
let node4 =  new ListNode(-4)
head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2

console.log(hasCycle(head));


// head = [1,2]
let h1 = new ListNode(1)
let n2 = new ListNode(2);
h1.next = n2;
n2.next = h1;

console.log(hasCycle(h1));

// head = [1]

let h2 = new ListNode(1);
console.log(hasCycle(h2));

// Time Complexity:
 // O(n) - Entire list may be traversed
// Space Complexity:
  // O(1) - List is not being store in additional data structure