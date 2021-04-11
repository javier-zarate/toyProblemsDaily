/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    // create a map of the vowels
    // convert string to lowercarse
    
    // create to counters
    // iterate over each string and see if the counts match
    
    const vowels = {
        'a': 'a', 
        'e': 'e',
        'i': 'i',
        'o': 'o',
        'u': 'u'
    }
    
    s = s.toLowerCase();
    
    let left = s.slice(0, s.length/2);
    let right = s.slice((s.length / 2), s.length);
    
    let lCount = 0, rCount = 0;
    
    let i = 0; 
    while (i <= s.length) {
        if (vowels[left[i]]) lCount++;
        if (vowels[right[i]]) rCount++;
        i++;
    }
    return lCount === rCount;
};