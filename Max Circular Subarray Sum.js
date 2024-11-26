// Max Circular Subarray Sum (26-11-2024)

// Given an array of integers arr[] in a circular fashion. Find the maximum subarray sum that we can get if we assume the array to be circular.


// Input: arr[] = [8, -8, 9, -9, 10, -11, 12]
// Output: 22
// Explanation: Starting from the last element of the array, i.e, 12, and moving in a circular fashion, we have max subarray as 12, 8, -8, 9, -9, 10, which gives maximum sum as 22.

class Solution {
    circularSubarraySum(arr) {
        const kadane = (nums) => {
            let maxEndingHere = nums[0];
            let maxSoFar = nums[0];
            for (let i = 1; i < nums.length; i++) {
                maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
                maxSoFar = Math.max(maxSoFar, maxEndingHere);
            }
            return maxSoFar;
        };

        const totalSum = arr.reduce((sum, num) => sum + num, 0);
        const maxSubarraySum = kadane(arr);

        const invertedArr = arr.map(num => -num);
        const maxInvertedSum = kadane(invertedArr);
        const minSubarraySum = -maxInvertedSum;

        if (minSubarraySum === totalSum) {
            return maxSubarraySum;
        }

        const maxCircularSum = totalSum - minSubarraySum;

        return Math.max(maxSubarraySum, maxCircularSum);
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.circularSubarraySum([8, -8, 9, -9, 10, -11, 12])); // Output: 22
