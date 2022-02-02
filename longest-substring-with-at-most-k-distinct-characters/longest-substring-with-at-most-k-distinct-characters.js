/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    let window = {} 
    let left = 0;
    let longestSubStr = 0; 
    
    for (let right in s) {
        let rightChar = s[right];
        
        if (!(rightChar in window)) {
            window[rightChar] = 0;
        }
        window[rightChar]++; 
        
        while (Object.keys(window).length > k) {
            let leftChar = s[left];
            window[leftChar]--; 
            
            if (window[leftChar] === 0){
                delete window[leftChar];
                
            }
            left++
        }
        
        longestSubStr = Math.max(longestSubStr, right - left + 1);
    }
    
    return longestSubStr; 
};