/**
 * @param {number[]} nums
 * @return {number[]}
 */
// two pointer solution
// since the array is sorted in asc order the nums at each end would be the greates squared
var sortedSquares = function(nums) {
    let squaredNums = new Array(nums.length); 
    let left = 0, right = nums.length - 1;
    let assign = right;
    
    while (left <= right) {
        if (nums[left] ** 2 > nums[right] ** 2) {
            squaredNums[assign] = nums[left] ** 2; 
            left++;
        } else {
            squaredNums[assign] = nums[right] ** 2;
            right --;
        }
        assign--;
    }
    return squaredNums;
};


// Brute Force methodhe squares then sort the resulting array
// iterate over the array and get t
// var sortedSquares = function(nums) {
//     return nums.map((num) => num * num).sort((a, b) => a - b);
// };