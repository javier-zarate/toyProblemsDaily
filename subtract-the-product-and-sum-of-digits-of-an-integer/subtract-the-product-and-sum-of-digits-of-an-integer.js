/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
	let numArr = n.toString().split('');
	let sum = Number(numArr[0]),
		product = Number(numArr[0]);

	for (let i = 1; i < numArr.length; i++) {
		debugger;
		sum += Number(numArr[i]);
		product *= Number(numArr[i]);
	}
	return product - sum;
};
