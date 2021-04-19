/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    
    let arr = [];
    let isOdd = false;
    if (n === 1) return [0];
    
    if (n % 2 !== 0) {
        arr.push(0)
        n = n - 1;
        isOdd = true;
    } 
    
    let start = (n / 2) * -1;
    
    while (arr.length < n) {
        if (start !== 0) {
            arr.push(start);
        }
        start += 1;
    }
    if (isOdd) {
        if (start === 0) start++;
        arr.push(start);
        return arr;
    }
    return arr ;
}