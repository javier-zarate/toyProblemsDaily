/**
 * Source: Pramp
 *
 * Prompt:
 *
 * Find The Duplicates
Given two sorted arrays arr1 and arr2 of passport numbers, implement a function findDuplicates that returns an array of all passport numbers that are both in arr1 and arr2. Note that the output array should be sorted in an ascending order.

Let N and M be the lengths of arr1 and arr2, respectively. Solve for two cases and analyze the time & space complexities of your solutions: M ≈ N - the array lengths are approximately the same M ≫ N - arr2 is much bigger than arr1.

Example:

input:  arr1 = [1, 2, 3, 5, 6, 7], arr2 = [3, 6, 7, 8, 20]

output: [3, 6, 7] # since only these three values are both in arr1 and arr2

Constraints:

[time limit] 5000ms

[input] array.integer arr1

1 ≤ arr1.length ≤ 100
[input] array.integer arr2

1 ≤ arr2.length ≤ 100
[output] array.integer
 */



// slow naive approach
//function findDuplicates(arr1, arr2) {
// result arr = []
// iterate over arr1
// index of arr1 look for it in arr2
// 1 indexOf(arr2)
// push to result arr

// return result;
//}

// second approach
function findDuplicates(arr1, arr2) {
	let result = [];

	let pointer1 = 0;
	let pointer2 = 0;

	while (pointer1 < arr1.length && pointer2 < arr2.length) {
		if (arr1[pointer1] === arr2[pointer2]) {
			result.push(arr1[pointer1]);
			pointer1++;
			pointer2++;
		} else if (arr1[pointer1] < arr2[pointer2]) {
			pointer1++;
		} else if (arr1[pointer1] > arr2[pointer2]) {
			pointer2++;
		}
	}

	return result;
}

let arr1 = [1,3,5,9], arr2 = [2,4,6,10];

console.log(findDuplicates(arr1, arr2));

// input: arr1, arr2, sorted
// return arr -> with dups
// constraints: arr length art least 1
// edge cases:
// dup withing own array
