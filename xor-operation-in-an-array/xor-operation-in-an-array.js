/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let result = 0; 
    
    let i = 0; 
    while (i < n) {
        result = result ^ (start + 2 * i)
        i++;
    }
    return result;
};