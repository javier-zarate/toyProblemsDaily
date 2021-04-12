/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 1) return s;
    
    const isPalindrome = (str) => {
        let i = 0;
        while (i < str.length - 1 - i) {
            if(str[i] !== str[str.length - 1 - i]) return false;
            i++;
        }
        return true;
    }
    let longest = '';
    let i=0; 
    while (i < s.length) {
        for( let j = i + 1; j < s.length; j++) {
            let slice = s.slice(i, j + 1);
            if (isPalindrome(slice) && slice.length > longest.length) {
                longest = slice;
            }
        }
        i++;
    }
    return longest.length === 0 ? s[0]: longest;
};