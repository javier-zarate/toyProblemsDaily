/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    
    reverseArr(nums, 0, nums.length - 1); 
    reverseArr(nums, 0, k - 1); 
    reverseArr(nums, k, nums.length - 1)
};

const reverseArr = (arr, start, end) => {
    while(start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]; 
        start++; 
        end--;
    } 
};