/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = '';
    
    let i = 0;
    
    while (i < word1.length || i < word2.length) {
        if (word1[i] && word2[i]) result += word1[i] + word2[i];
        if (!word1[i]) result += word2[i];
        if (!word2[i]) result += word1[i];
        i++;
    }
    return result;
};