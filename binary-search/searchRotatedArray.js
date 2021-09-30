// you are given a sorted array -> nums = [1,2,3,4,5,6,7] and a target = 2
// by the time you get the array it may have been rotated k places
// [1,2,3,4,5,6,7]  k = 2 -> [3,4,5,6,7,1,2]
// find the target number in the array in O(log n)

// iterative approach
const search = (nums, target) => {
  // start with 2 pointers at either end of the array
  let left = 0; right = nums.length -1;

  // while the pointer dont pass each other continue to search wihin the array
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    // if mid is not the target use devide and conquer approach
    // to dtermine which side to search you must make sure that
    // the target lies within that half

    // if left element in current chunk is less then current mid
    // that section is ascending
    // else you are in a mixed section

    // further inspect that section
    if (nums[left] < nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
        if (nums[mid] < target && target <= nums[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
    }
  }
  return - 1;
};

let x = [6,7,8,9,0,1,2,3,4,5];
console.log('iterartive: ', search(x, 4));

const searchRecursive = (nums, target, left, right) => {
    if (left > right) return - 1;

    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    if (nums[left] < nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        return searchRecursive(nums, target, 0, mid - 1);
      } else {
        return searchRecursive(nums, target, mid + 1, right);
      }
    } else {
        if (nums[mid] < target && target <= nums[right]) {
          return searchRecursive(nums, target, mid + 1, right);
        } else {
          return searchRecursive(nums, target, 0, mid - 1);;
        }
    }
};

console.log('recursive: ', searchRecursive(x, 4, 0, x.length - 1));