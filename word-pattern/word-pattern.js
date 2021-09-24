/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let words = str.split(' ');
    if (words.length !== pattern.length) return 0; 
    
    let charMap = {}; 
    let wordMap = {}; 
    
    for (let i = 0; i < pattern.length; i++) {
        char = pattern[i];
        word = words[i]; 
        
        if (charMap[char] !== undefined || wordMap[word] !== undefined) {
            if (charMap[char] !== word || wordMap[word] !== char) {
                return false; 
            }
        }
        charMap[char] = word;
        wordMap[word] = char;
        
    }
    return true;
};