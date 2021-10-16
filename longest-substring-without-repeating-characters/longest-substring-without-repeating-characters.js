/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const currentWindow = new Set(); 
    let longestStr = 0;
    let left = 0, right = 0
    
    while (right < s.length) {
        if (!currentWindow.has(s[right])) {
            currentWindow.add(s[right]);
            right++;    
        } else {
            currentWindow.delete(s[left]);
            left++;
        }
        
        longestStr = Math.max(longestStr, currentWindow.size);
    }
    
    return longestStr;
};