/* Source: leetCode, March LeetCoding Challenge 2021*/

/*
Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

Example 1:

Input: candyType = [1,1,2,2,3,3]
Output: 3
Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.
Example 2:

Input: candyType = [1,1,2,3]
Output: 2
Explanation: Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types.
Example 3:

Input: candyType = [6,6,6,6]
Output: 1
Explanation: Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type.
*/

/*
I: array
O: number (total candies available for consumption)
C: 2 <= n <= 10^4, n is even, -10^5 <= candyType[i] <= 10^5
E:
*/

var distributeCandies = function(candyType) {
  let candies = {};
  let totalCandieTypes = 0;
  const totalCandies = candyType.length;

  for (let i = 0; i < totalCandies; i++) {
    if (!candies[candyType[i]]) {
      candies[candyType[i]] = true;
      totalCandieTypes++;
    }
  }

  if (totalCandieTypes < (totalCandies/2)) {
    return totalCandieTypes;
  }

  return totalCandies/2;
};

/*
  Time Complexity: O(n) - linear
  Space Complexity: O(n) - linear.
    - total candies object in worst case is as long as og CandyType arr
*/

// const tests = [
//   [1,1,2,2,3,3],  // 3
//   [1,1,2,3],      // 2
//   [6,6,6,6]       // 1
// ];

// for (let i in tests) {
//   console.log(distributeCandies(tests[i]));
// }

var distributeCandies = function(candyType) {
  let uniqueCandies = new Set(candyType);

  let totalUniqueCandies = uniqueCandies.size;
  let canEat = candyType.length / 2;

  if (canEat >= totalUniqueCandies) return totalUniqueCandies;
  else return canEat;
};

/*
  Time Complexity: O(n) - linear
   - populating set
  Space Complexity: O(n) - linear.
    - set
*/