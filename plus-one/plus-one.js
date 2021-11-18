/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    digits[digits.length - 1] += 1;
    let carry = 0;
    
    if (digits[digits.length - 1] > 9) {
        carry = 1; 
        digits[digits.length - 1] %= 10;
    }
    
    
    for (let i = digits.length - 2 ; i >= 0; i--) {
        digits[i] += carry;
        
        if (digits[i] > 9) {
            carry = 1; 
            digits[i] %= 10;
        } else {
            carry = 0;
        }
    }
    if (!!carry) digits.unshift(carry);
    
    return digits;
};