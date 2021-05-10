/* Source: hackerRank

Prompt:
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example


There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Function Description

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock
Returns

int: the number of pairs
Input Format

The first line contains an integer , the number of socks represented in .
The second line contains  space-separated integers, , the colors of the socks in the pile.

Constraints
1 < n <= 100,
1 <=ar[i] <=100 where 0 <= i < n
*/

function sockMerchant(n, ar) {
	// empty case
	if (n === 0 || ar.length === 0) return 0;

	let pairs = {};
	let total = 0;

	for (let i = 0; i < ar.length; i++) {
		let sock = ar[i];
		if (!pairs[sock]) {
			pairs[sock] = 1;
		} else {
			pairs[sock]++;
		}
	}

	for (let i in pairs) {
		total += Math.floor(pairs[i] / 2);
	}
	return total;
}
/*Time Complexity: O(n^2)
- case where there is no pairs, n and all are stores in the
  pairs object thus they are traversed again
  Space Complexity: O(n)
- Case where there are no pairs and all are stored
*/
function sockMerchant(n, ar) {
	let ones = {},
		pairs = 0;
	for (let i = 0; i < n; i++) {
		if (ones.hasOwnProperty(ar[i])) {
			pairs++;
			delete ones[ar[i]];
		} else {
			ones[ar[i]] = 0;
		}
	}
	return pairs;
}
/*Time Complexity: O(n)
- traverses all socks and .hasOwnProperty should be O(1)
  as it is a key lookup.
  Space Complexity: O(n)
- Case where there are no pairs and all are stored
*/
