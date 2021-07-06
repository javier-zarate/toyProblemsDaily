// Source: HackerRank

/**
 * Prompt:
 * A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. Given an integer, , rotate the array that many steps left and return the result.

Example
d = 2
arr = [1,2,3,4,5]

After  rotations,

arr = [3,4,5,1,2]

Function Description

Complete the rotateLeft function in the editor below.

rotateLeft has the following parameters:

int d: the amount to rotate by
int arr[n]: the array to rotate
Returns

int[n]: the rotated array
Input Format

The first line contains two space-separated integers that denote , the number of integers, and , the number of left rotations to perform.
The second line contains  space-separated integers that describe .

Constraints
  1 <= n <= 10^5
  1 <= d <= n
  1 <=a[i] <=10^6

 */

function rotateLeft(d, arr) {
   // Input: d -> number of rotations, arr -> array to rotate
   // Output: rotated array
   // Constraints: Listed on constraints section of problem
   // Edge Cases:
    // wrong inputs -> not an array or not numbers for d or n
    // empty arr or arr or single element -> no need to perform arithmetic
    // just return the original array
    // array of 2 elements -> if swap is even return original
        // if swap is odd return reversed arr
    // n is arbitrary after these edge cases

  // throw array into a queue
  // deque d amounts of times
  // after each deque enque the dequed element
  // return resulting array

  // implementation:

  // EDGE CASES
  // empty/ wrong inputs
  if (typeof d !== 'number' || !Array.isArray(arr)) {
      console.log('Invalid input');
      return [];
  }

  // array of length 0 or 1
  if (arr.length === 0 || arr.length === 1) {
      return arr;
  }

  // array is of size 2 and d is odd or even
  // saves computing for potential large number of rotations (d) on this particular case
  if (arr.length === 2 && d % 2 === 0){
      return arr;
  } else if (arr.length === 2 && d % 2 !== 0) {
      return [arr[1], arr[0]];
  }

  while (d > 0) {
      let dequedElement = arr.shift();
      arr.push(dequedElement);
      d--;
  }

  return arr;

}

// tests:
let x = rotateLeft(4,[1,2,3,4,5]);
let y = rotateLeft(3,[1,2,3,4,5]);
let z = rotateLeft(1,[1,2,3,4,5]);
let noRotation = rotateLeft(0,[1,2,3,4,5]);

console.log(x)
console.log(y)
console.log(z)
console.log(noRotation)

// Time Complexity:
// O(d) -> number or rations will determine the number or loops to swap elements
// Space Complexity:
// O(1) -> constant space since no new array created and modifying original

