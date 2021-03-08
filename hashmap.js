/* Source: leetCode, March LeetCoding Challenge 2021

Prompt:
Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:


put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.

Example:

MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found)

Note:

All keys and values will be in the range of [0, 1000000].
The number of operations will be in the range of [1, 10000].
Please do not use the built-in HashMap library.

I: nums is range of [0, 1000000];
O:
  Put: none
  Get: return number associated with the key
C: dont use built in hashmap library
E:

/**
 * Initialize your data structure here.
 */
 var MyHashMap = function() {
  this.map = {}
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  this.map[key] = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  return (this.map[key] >= 0) ? this.map[key] : -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  delete this.map[key]
};

/* Time Complexity: O(1) - constant
  all read and writes to map obj are consant
  Space complexity: O(n) - linear
  map could in the worst case be full from 0 - 1000000
*/

var obj = new MyHashMap()
obj.remove(2);
obj.put(3,11);
obj.put(4,13);
obj.put(15,6);
obj.put(6,15);
obj.put(8,8);
obj.put(11,0);
let get = obj.get(11);
