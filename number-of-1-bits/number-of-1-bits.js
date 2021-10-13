/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let sum = 0; 
    
    while (n !== 0) {
        sum++;
        n &= (n - 1);
    }
    return sum;
};

//1011
//1010 -> 1010
//        1001 -> 1001
//                1000 -> 1000
//                        0111 -> 0000
//                             