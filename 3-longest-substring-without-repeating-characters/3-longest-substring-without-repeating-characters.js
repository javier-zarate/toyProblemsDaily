/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let window = new Set();
    let left = 0, right = 0, result = 0;
    
    while (right < s.length) {
        let r = s[right];
        if (!window.has(r)) {
            window.add(r);
            right++;
        } else {
            let l = s[left];
            window.delete(l);
            left++;
        }
        
        result = Math.max(result, window.size)
    }
    
    return result;
};

    

