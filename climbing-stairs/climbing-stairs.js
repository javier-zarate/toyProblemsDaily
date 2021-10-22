/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memo = new Array(n + 1);
    return climb(0, n, memo);
};

const climb = (i, n, memo) => {
    if (i > n) {
        return 0;
    }
    if (i === n) {
        return 1;
    }
    if (memo[i] > 0) {
        return memo[i];
    }
    memo[i] = climb(i + 1, n, memo) + climb(i + 2, n, memo);
    return memo[i];
};