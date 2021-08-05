/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let sum = new ListNode();
  let head = sum;
  let currentNodeSum;
  
  // loop throught both lists
  while(l1 !== null || l2 !== null) {
    currentNodeSum = 0;

    // get the sum of the current nodes 
    if (l1 !== null && l2 !== null) {
      currentNodeSum = l1.val +l2.val + carry;
      l1 = l1.next;
      l2 = l2.next;
    } else if (l1 === null) {
       currentNodeSum = l2.val + carry;
      l2 = l2.next;
    } else {
      currentNodeSum = l1.val + carry;
      l1 = l1.next;
    }

    //update carry variable 
    if (currentNodeSum > 9) {
      carry = 1;
      sum.val = currentNodeSum - 10;
    } else {
      sum.val = currentNodeSum;
      carry = 0;
    }
    
    // if both lists are empty dont create a new node
    if (l1 !== null || l2 !== null) {
      sum.next = new ListNode();
      sum = sum.next;
    }
    
  }
  
  // if there is a pending carry it'll create a final node with its value
  if (carry > 0) {
    sum.next = new ListNode(carry)
  }
  
  return head;

};
