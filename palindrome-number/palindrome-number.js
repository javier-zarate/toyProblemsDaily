/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = (x) => {
	return x.toString() === x.toString().split('').reverse().join('');
};