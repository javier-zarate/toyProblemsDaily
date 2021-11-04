/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = ''; 
    let temp = ''; 
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            result += reverse(temp) + ' ';
            temp = '';
        } else {
            temp += s[i]; 
        }
    }
    result += reverse(temp);
    
    return result;
};


const reverse = (word) => {
    word = word.split('');
    
    for(let left = 0, right = word.length - 1; left < word.length /2; left ++) {
        [word[left], word[right]] = [word[right], word[left]];
        right--;
    }
    
    return word.join('');
};

