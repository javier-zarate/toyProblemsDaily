/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    return binarySearchApproach(nums1, nums2);
};

// Brute Force Approach
// Merge both arrays, sort them, return mid or average of 2 mids 

// const bruteForceFindMedian = (nums1, nums2) => {
//     let merged = nums1.concat(nums2).sort((a,b) => a - b); 
//     let mid = Math.floor((merged.length - 1)/ 2);
//     if (merged.length % 2 === 0) {
//         return (merged[mid] + merged[mid + 1]) / 2;
//     }
//     return merged[mid]; 
// }

// concat time complexity O(n + m) -> O(n)
// sort Time Complexity O(n Log n) 
// Total Time complexity O(n + m Log n + m)
const binarySearchApproach = (nums1, nums2) => {
    // ensure first input is smaller if one is larger
    if(nums1.length > nums2.length) return binarySearchApproach(nums2, nums1);
    
    let xLength = nums1.length;
    let yLength = nums2.length;
    
    // binary search on x array; 
    let low = 0, high = xLength;
    while(low <= high) {
        // get partition for x which will determine partition for y
        let partitionX = Math.floor((high + low) / 2);
        let partitionY = Math.floor((xLength + yLength + 1) / 2) - partitionX;

        // determine max and min for respective partiotions
        // if partion start or end at start or end off array then the "missing" element will be -/+ INFINITY
        let minLeftX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        let maxRightX = (partitionX === nums1.length) ? Infinity : nums1[partitionX];

        let minLeftY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        let maxRightY = (partitionY === nums2.length) ? Infinity : nums2[partitionY ];
        
        // Binary Search Target Condition
        if(minLeftX <= maxRightY && minLeftY <= maxRightX) {
            let lowMax = Math.max(minLeftX, minLeftY);
            if( (xLength + yLength) % 2 === 1)
                return lowMax;
            return (lowMax + Math.min(maxRightX, maxRightY)) / 2;
        } else if(minLeftX < maxRightY) {
            low = partitionX + 1;
        } else
            high = partitionX - 1;
    }
};