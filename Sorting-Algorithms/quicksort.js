// This implementation takes additional space complexity: O (n)
// average time complexity: o(n log n), WORST: O(n^2)
const quicksort = (arr) => {
	// edge case
	if (arr.length <= 1) {
		return arr;
	}

	const pivot = arr[arr.length - 1];
	const rightArr = [],
		leftArr = [];

	for (const el of arr.slice(0, arr.length - 1)) {
		el < pivot ? leftArr.push(el) : rightArr.push(el);
	}

	return [...quicksort(leftArr), pivot, ...quicksort(rightArr)];
};

// implementation WITHOUT EXTRA SPACE

function partition(arr, start, end) {
	const pivotValue = arr[end];
	let pivotIndex = start;

	for (let i = start; i < end; i++) {
		if (arr[i] < pivotValue) {
			[arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
			pivotIndex++;
		}
	}

	// set the pivot point to the correct section
	[arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
	return pivotIndex;
}

function quicksortRecursive(arr, start, end) {
	//base case
	if (start >= end) return;

	const index = partition(arr, start, end);

	quicksortRecursive(arr, start, index - 1);
	quicksortRecursive(arr, index + 1, end);
}

let unsortedArray = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

console.log(unsortedArray);
quicksortRecursive(unsortedArray, 0, unsortedArray.length - 1);
console.log(unsortedArray);