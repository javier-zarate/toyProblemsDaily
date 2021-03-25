/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = (x) => {
	// any negative number will never be a palindrome
	if (x < 0) return false;

	// convert numbet to array
	const numArr = String(x).split('');

	// check matches fromt the outside in
	for (let i = 0; i < numArr.length; i++) {
		if (numArr[i] !== numArr[numArr.length - (1 + i)]) return false;
	}

	return true;
};
