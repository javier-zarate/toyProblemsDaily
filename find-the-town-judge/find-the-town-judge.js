/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let town = Array(n).fill(0);
    
    for (curr of trust) {
        
        town[curr[0] - 1]--;
        town[curr[1] - 1]++;
 
    }
    
    for (person in town) {
        if (town[person] === n - 1) return Number(person) + 1;
    }
    
    return - 1;
};
