/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === "") return 0; 
    
    let len = needle.length;
    
    for (let i = 0; i < haystack.length; i++) {
        let currentSlice = haystack.slice(i, i + len); 
        
        if (currentSlice === needle) return i;
    }
    return -1;
};