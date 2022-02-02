/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let result = new Array(A.length);
    let left = 0, right = A.length - 1;
    
    for (let i = A.length - 1; i >= 0; i--) {
        let square; 
        if (Math.abs(A[left]) < Math.abs(A[right])) {
            square = A[right];
            right--;
        } else {
            square = A[left];
            left++;
        }
        result[i] = square * square;
    }
    return result;
};