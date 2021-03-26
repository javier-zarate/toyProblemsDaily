/**
 * @param {string} s
 * @return {boolean}
 */
let map = {
	'(': ')',
	'[': ']',
	'{': '}',
};

let isValid = function (s) {
	let stack = [];

	for (let i = 0; i < s.length; i++) {
		let el = s[i];

		// if element is in map it is added to the stack
		if (map[el]) {
			stack.push(map[el]);
		} else {
			// if element is not is map it should me match with the top of the stack
			if (el !== stack.pop()) {
				return false;
			}
		}
	}
  //if that stack is not empty there was an un closed bracket at some point
	return stack.length === 0;
};
