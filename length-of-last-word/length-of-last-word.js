/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s.length === 0) return 0;
    let count = 0; 
    for (let i = s.length - 1; i >= 0; i--) {
        if (count > 0 && s[i] === ' ') return count;
        if (s[i] === ' ') continue; 
        else count++;
    }
    return count;
};