/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    return binarySearchRows(matrix, target, 0, matrix.length - 1);
};

const binarySearchRowWithinRange = (arr, target, start, end) => {
    // base case
    if (start > end) return false;

    const mid = Math.floor((end + start) / 2);

    if (arr[mid] === target) return true;

    if (arr[mid] > target) {
        return binarySearchRowWithinRange(arr, target, start, mid - 1);
    }
    return binarySearchRowWithinRange(arr, target, mid + 1, end);
};

const binarySearchRows = (matrix, target, start, end) => {
    if (start > end) return false;

    const mid = Math.floor((end + start) / 2);

    if (matrix[mid][0] === target) return true;

    if (matrix[mid][0] < target && matrix[mid][matrix[mid].length - 1] >= target) {
        return binarySearchRowWithinRange(matrix[mid], target, 0, matrix[mid].length -1);
    }

    if (matrix[mid][0] > target) return binarySearchRows(matrix, target, start, mid -1);

    return binarySearchRows(matrix, target, mid + 1, end);
}