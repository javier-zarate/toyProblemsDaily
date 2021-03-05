/*
Source: leetcode, March LeetCoding Challenge 2021

Prompt:
Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:

A:        a1 -> a2
                  \
                   c1 -> c2 -> c3
                  /
B:  b1 -> b2 -> b3
Beging to inetersect at the node c1.

Example 1:

A:        4 -> 1
                \
                 8 -> 4 -> 5
                /
B:   5 -> 6 -> 1

Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

Example 2:

A: 1 -> 9 -> 1
              \
               2 -> 4
              /
B:           3
Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Reference of the node with value = 2
Input Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

Example 3:

A: 2 -> 3 -> 4
B:      2 -> 5

Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: null
Input Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.

Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Each value on each linked list is in the range [1, 10^9].
Your code should preferably run in O(n) time and use only O(1) memory.

I: 2 linked lists
O: null is no intersect or value of itersect node
C: range of list [1, 10^9], time: O(n) space: O(1)
E: empty list
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  // if one of the list is empty there is no match
  if (!headA || !headB) {
    return null;
  }

  // store listA in set
  let seen = new Set();

  while(headA !== null) {
    seen.add(headA);
    headA = headA.next; // move to next node
  }

  // check for matching nodes in listB
  while (headB !== null) {
    if (seen.has(headB)) {
      return headB;
    }
    headB = headB.next;
  }

  return null;
};

/*
time complexity: 0(n)
  while 1 = n
  while 2 = m
  O(n) -> total number of nodes in both lists are traversed
Space Complexity:
  O(n) -> set could be total number of nodes
   - if list b is empty total number of nodes is the set thus
     storing all the nodes provided
*/

