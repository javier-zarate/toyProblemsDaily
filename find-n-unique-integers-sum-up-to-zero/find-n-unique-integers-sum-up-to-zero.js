/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let arr = [];
    if (n % 2 !== 0){
      arr.push(0);
    }
    
    for (let i = 0; i < Math.floor(n/2); i++) {
        arr.push(i+1);
        arr.push(-(i+1));
    }
    
    return arr;
}
