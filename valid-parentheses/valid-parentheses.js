/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	let tracker = [];

	for (let i = 0; i < s.length; i++) {
		let curr = s[i];

		if (curr === '(' || curr === '{' || curr === '[') {
			tracker.push(curr);
		}

		if (curr === ')' || curr === '}' || curr === ']') {
			let last = tracker.pop(curr);

			if (curr === ')' && last === '(') continue;
			else if (curr === '}' && last === '{') continue;
			else if (curr === ']' && last === '[') continue;
			else return false;
		}
	}
	// case were all elements in string were opening brackets
	if (tracker.length !== 0) return false;

	return true;
};