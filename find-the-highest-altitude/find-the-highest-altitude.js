/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let highest = null;
    let currentAlt = null;
    for (let i = 0; i < gain.length; i++) {
        if (highest === null) {
            highest = 0 + gain[i];
            currentAlt = highest;
        } else{
            currentAlt += gain[i];
        }
        
        if (currentAlt > highest) {
            highest = currentAlt;
        }
    }   
    return (highest < 0) ? 0: highest;
};