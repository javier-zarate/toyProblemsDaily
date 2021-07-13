/**
 * Source: Daily Coding Problem
 *
 * Prompt:
 * You have n fair coins and you flip them all at the same time. Any that come up tails you
 * set aside. The ones that come up heads you flip again. How many rounds do you expect to
 * play before only one coin remains?
 *
 * Write a function that, given n, returns the number of rounds you'd expect to play until
 * one coin remains.
 */

/**
 * Input:  int -> number of coins that you are starting with
 * Ouput: int -> number of rounds until one coin remians
 * Constraints: coin flip 50/50 chance of heads or tails
 * Edge Cases:
 *  - invalid input:
 *  - no coins are given or a single coins is given
 *
 * create a variable to keep track of number or rounds
 *
 * create a loop that goes from 1 - n creating a random number.
 * if the random number is less than .6 it is tails thus n is subtracted
 * this repeats until n === 1
 * return rounds count
 *
 * Time Complexity:
 * O(n!) -> worst case only 1 coin is removes each round
 * Space Complexity:
 * O(1) -> Constant
 *
 * LESS EFFIECIENT but more up to "chance"
 *
 * Another approach would be more logorithmic and EFFICIENT
 * There is a 50% chance that half the coins are tails after each flip
 * thus each round half of the coins are removed
 *
 * Time Complexity:
 * O(log n) -> each iteration is logarithmically halfed
 * Space Complexity:
 * O(1) -> Constant
 *
 */

const rounds = (n) => {
  let rounds = 0;

  while (n !== 1) {
    for(let i = 0; i < n; i++) {
     // random number represents flip result
      if (Math.random() <= 0.5) {
        n--;
      }
    }
    rounds++;
  }

  return rounds;
}

const logRounds = (n) => {
  let rounds = 0;

  while(n > 1) {
    n = Math.floor(n /2);
    console.log("n: ", n)
    rounds++;
  }

  return rounds;
}


