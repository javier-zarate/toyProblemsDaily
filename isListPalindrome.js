/**
 * Souce: CodeSignal
 *
 * Prompt:
 * Given the head of a singly linked list, return true if it is a palindrome.
 * Could you do it in O(n) time and O(1) space?
 *
 * Example 1:
 * Input: head = [1,2,2,1]
 * Output: true
 *
 * Example 2:
 * Input: head = [1, 2]
 * Output: false
 *
 * I: head of singly linked list
 * O: boolean if list is palindrome or not
 * C: The number of nodes in the list is in the range [1, 105].
 * 		0 <= Node.val <= 9.
 * E: empty list
 */

function isListPalindrome(head) {
	if (head === null || head.next === null) return true;

	let fast = head;
	let slow = head;

	while (fast !== null && fast.next !== null) {
		fast = fast.next.next;
		slow = slow.next;
	}

	slow = reversed(slow);
	fast = head;

	while (slow !== null) {
		if (slow.value !== fast.value) return false;
		slow = slow.next;
		fast = fast.next;
	}

	return true;
}

const reversed = (head) => {
	let prev = null;
	let next = null;

	while (head !== null) {
		next = head.next;
		head.next = prev;
		prev = head;
		head = next;
	}

	return prev;
};

// function ListNode(x) {
// 	this.value = x;
// 	this.next = null;
// }

// let start = new ListNode(1);
// let node1 = (start.next = new ListNode(2));
// let node2 = (node1.next = new ListNode(3));
// let node3 = (node2.next = new ListNode(4));
// let node4 = (node3.next = new ListNode(5));
console.log(isListPalindrome(start));
