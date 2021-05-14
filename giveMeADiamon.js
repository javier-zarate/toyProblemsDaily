/**
 * Source: CodeWars
 *
Description:
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
 */

function diamond(n) {
	if (n % 2 === 0 || n <= 0) return null;

	let diam = '';

	let space = ' ';
	let star = '*';

	let mid = Math.ceil(n / 2);
	let spaceMod = mid;
	let starCount = 1;

	let i = 1;

	while (i <= n) {
		if (i === mid) {
			diam += star.repeat(starCount) + '\n';
		} else if (i < mid) {
			diam += space.repeat(n % spaceMod) + star.repeat(starCount) + '\n';
			spaceMod += 1;
			starCount += 2;
		} else {
			spaceMod -= 1;
			starCount -= 2;
			diam += space.repeat(n % spaceMod) + star.repeat(starCount) + '\n';
		}
		i++;
	}

	return diam;
}

console.log(diamond(1));
console.log(diamond(2));
console.log(diamond(3));
console.log(diamond(5));
console.log(diamond(9));
console.log(diamond(11));

/* Time Complexity: O(n)
   Space Complexity: O(n)
	 	- each 'row is comprised of n chars (spaces and *'s) + '\n'
		  so n + 1. string will grow linearly by n + 1 each iteration in loop
*/
