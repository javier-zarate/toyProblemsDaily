/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0;
    
    for (let i = 0; i < accounts.length; i++) {
        let len = accounts[i].length
        let wealth = 0;
        for (let j = 0; j < len; j++) {
            wealth += accounts[i][j];
        }
        if (max < wealth) max = wealth;
    }
    
    return max;
};