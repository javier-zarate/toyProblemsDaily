/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let isFound = false;
    
    for (const row of matrix) {
        const first = row[0], last = row[row.length - 1];
        if (first <= target && last >= target) {
            isFound = binarySearch(row, target, 0, row.length - 1);
        }
    }
    
    return isFound;
};

const binarySearch = (arr, target, start, end) => {
    // base case 
    if (start > end) return false;
    
    const mid = Math.floor((end + start) / 2); 
    
    if (arr[mid] === target) return true;
    
    if (arr[mid] > target) {
        return binarySearch(arr, target, start, mid - 1);
    }
    return binarySearch(arr, target, mid + 1, end);
}
