/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let result = [];
    let odd = [];
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) result.push(A[i]);
        else { odd.push(A[i]); }
    }
    
    result.push(odd);
    return result.flat();
};