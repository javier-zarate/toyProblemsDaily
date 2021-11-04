/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // use binarySearch to search for first false in log n time
        let left = 0, right = n;
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2); 
            let current = isBadVersion(mid);
            
            if (current === false && isBadVersion(mid+ 1) === true) return mid + 1; 
            
            if (current === true) {
                right = mid -1; 
            } else {
                left = mid + 1; 
            }    
        }
        return -1;
    };
};