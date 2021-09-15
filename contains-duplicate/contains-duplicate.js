/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let seen = {}; 
    
    for (num of nums) {
        if (seen[num]) {
            return true;
        } 
        seen[num] = true;
    }
    return false;
    
    
};