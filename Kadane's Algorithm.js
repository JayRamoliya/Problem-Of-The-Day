// Kadane's Algorithm (24-11-2024)

// Given an integer array arr[]. You need to find and return the maximum sum possible from all the subarrays.


// Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
// Output: 11
// Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.

class Solution {
    maxSubarraySum(arr) {
        let maxCurrent = arr[0];
        let maxGlobal = arr[0]; 

        for (let i = 1; i < arr.length; i++) {
            maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);            
            maxGlobal = Math.max(maxGlobal, maxCurrent);
        }

        return maxGlobal;
    }
}

// Example usage:
const solution = new Solution();
const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(solution.maxSubarraySum(arr)); // Output: 11
