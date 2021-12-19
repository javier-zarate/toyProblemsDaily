/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let window = new Set(); 
    let left = 0, right = 0; 
    let longestSubString = 0;
    
    while (right < s.length) {
        if(!window.has(s[right])) {
            window.add(s[right]); 
            right++;
        } else {
            window.delete(s[left]); 
            left++;
        }
        
        longestSubString = Math.max(longestSubString, window.size);
    }
    return longestSubString;
    
};