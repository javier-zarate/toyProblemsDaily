/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    let maxLength = 0, left = 0;
    const charSetInWindow = {}; 
    
    for (let right in s) {
        let rightMostChar = s[right]; 
        
        if (!(rightMostChar in charSetInWindow)) {
            charSetInWindow[rightMostChar] = 0;
        }
        charSetInWindow[rightMostChar]++;
        
        while(Object.keys(charSetInWindow).length > k) {
            let leftMostChar = s[left]; 
            charSetInWindow[leftMostChar]--;
            
            if (charSetInWindow[leftMostChar] === 0) {
                delete charSetInWindow[leftMostChar];
            }
            left++;
        }
        let windowSize =  right - left + 1
        maxLength = Math.max(maxLength, windowSize);
    }
    return maxLength;
};