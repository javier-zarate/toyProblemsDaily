// Source: Daily Coding Problem

// Prompt:
// This problem was asked by Square.

// Given a string and a set of characters, return the shortest substring containing all the characters in the set.

// For example, given the string "figehaeci" and the set of characters {a, e, i}, you should return "aeci".

// If there is no substring containing all the characters in the set, return null.

const validSubStr = (str, chars) => {
  // I: String and set of chars
  // O: possible substring or null
  // C: only availble set
  // E: out of order of the set that was given.
        // ex: set: a, e, i. String: ehai <- does that count?

  // iterate through the string
  // check char in char set at each incremental iteration of string
  // use a set to add to seen values from char set
      // if one repeats reset and start index
  // save start index when matching start, when matching is complete slice string and return result

  // else entire string is traversed and null is returned

  let matched = new Set();

  let start = undefined;

  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    if (chars.indexOf(curr) !== -1) {
      if (!matched.has(curr)) {

        matched.add(curr);
        if (start === undefined) {
          start = i;
        }
      } else {
        matched = new Set();
        start = undefined;
      }

      if (matched.size === chars.length) {
        return str.slice(start, i + 1);
      }
    }
  }

  return null;
}

// Time Complexity:
//  O(n x m) length of string and length of char set
// Space complexity:
//  O(m) Matched WILL mirror of store entire char set if found
