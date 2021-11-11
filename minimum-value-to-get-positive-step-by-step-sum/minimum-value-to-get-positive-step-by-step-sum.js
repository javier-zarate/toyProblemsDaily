/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let startValue = 1;
    
    while (true) {
        let total = startValue;
        let isValid = true;
        
        for(let num of nums) {
            total += num;
            
            if(total < 1) {
                isValid = false;
                break;
            }
        }
        
        if (isValid) return startValue;
        else startValue += 1;
    }
    return -1;
    
};