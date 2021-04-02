/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let results = 0;
    
    let size = arr.length;
    
    for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
            if (Math.abs(arr[i] - arr[j]) <= a) {
                for (let k = j + 1; k < size; k++) {
                    if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                        results++;
                    }
                }
            }
        }
    }
    return results;
};