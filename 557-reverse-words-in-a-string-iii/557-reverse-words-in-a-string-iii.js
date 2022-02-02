/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = '';
    let word = '';
    
    for(let char of s) {
        if (char === ' ') {
            // add reversed word plus the white space
            // reset word 
            result += word + char;
            word = '';
        } else {
            // collect words backwards by appending new chars to the beginning
            word = char + word;
        }
    }
    // append final word since it loop only appends when a space is reached
    return result + word;
};


