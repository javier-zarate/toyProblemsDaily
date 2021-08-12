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
  let sum = new ListNode();
  let head = sum;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    node1 = (l1 !== null) ? l1.val : 0;
    node2 = (l2 !== null) ? l2.val : 0;

    currentNodeSum = node1 + node2 + carry;
    carry = (currentNodeSum > 9) ? 1 : 0;
    sum.val = (carry > 0) ? currentNodeSum - 10 : currentNodeSum;

    l1 = (l1 !== null) ? l1.next : null;
    l2 = (l2 !== null) ? l2.next : null;

    if (l1 !== null || l2 !== null) {
      sum.next = new ListNode();
      sum = sum.next;
    }
  }

  sum.next = (carry > 0) ? new ListNode(carry) : null;

  return head;
}