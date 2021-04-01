/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
	if (arr.length === 1) return arr[0];

	let subLength = 1;
	let runningSum = 0;

	const traverseSubs = (arr, subLength) => {
		let i = 0,
			sub = 0,
			counter = 0;

		while (counter !== subLength || i < arr.length) {
			if (counter === subLength) {
				counter = 0;
				sub++;
				i = sub;
			} else {
				runningSum += arr[i];
				i++;
				counter++;
			}
		}
	};

	while (subLength <= arr.length) {
		traverseSubs(arr, subLength);
		subLength += 2;
	}

	return runningSum;
};