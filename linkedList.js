/**
 * Data Structures: Linked List and related methods
 */

class Node {
	constructor(data) {
		this.value = data;
		this.next = null;
	}
}

class LinkedList {
	constructor(head = null) {
		this.head = head;
	}
}

LinkedList.prototype.size = function () {
	let counter = 0;

	let currentNode = this.head;

	while (currentNode) {
		counter++;
		currentNode = currentNode.next;
	}
	return counter;
};

LinkedList.prototype.insertAtEnd = function (value) {
	let currentNode = this.head;

	if (!currentNode) {
		currentNode = new Node(value);
		return this.head;
	}

	while (currentNode) {
		if (currentNode.next === null) {
			currentNode.next = new Node(value);
			break;
		}
		currentNode = currentNode.next;
	}
	return this.head;
};

LinkedList.prototype.insertAtBeggining = function (value) {
	let temp = this.head;
	this.head = new Node(value);
	this.head.next = temp;
	return this.head;
};

LinkedList.prototype.deleteNode = function (value) {
	// delete on empty list
	if (!this.head) {
		return;
	}

	// delete on head
	if (this.head.value === value) {
		this.head = this.head.next;
		return;
	}

	// delete on node elsewhere down the list
	let curr = this.head;

	while (curr) {
		if (curr.next.value === value) {
			curr.next = curr.next.next;
			break;
		}
		curr = curr.next;
	}
};

let node1 = new Node(2);
let node2 = new Node(3);
let node3 = new Node(4);
let node4 = new Node(5);
node1.next = node2;
node1.next.next = node3;
node1.next.next.next = node4;

let list = new LinkedList(node1);
console.log('before', list);
list.insertAtBeggining(1);
console.log('after', list);
list.insertAtEnd(10);
list.deleteNode(10);
console.log(list.size());

// list.deleteNode(2);
// console.log('after', list);
// console.log('size', list.size());
