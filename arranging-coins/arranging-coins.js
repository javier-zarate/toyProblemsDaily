/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if(!n) return 0;
    
    let result = 0, total = 0;
    
    while(total <= n) {
        result++;
        total += result; 
    }
    if(result <= 1) return result; 
    return result - 1;
};