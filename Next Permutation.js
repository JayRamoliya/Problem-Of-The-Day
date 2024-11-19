// Next Permutation (19-nov-24)

// Given an array of integers arr[] representing a permutation, implement the next permutation that rearranges the numbers into the lexicographically next greater permutation. If no such permutation exists, rearrange the numbers into the lowest possible order (i.e., sorted in ascending order). 

// Note - A permutation of n numbers is any possible arrangement of all the integers in range [1-n] where each integer occurs exactly once. 

// Input: arr = [2, 4, 1, 7, 5, 0]
// Output: [2, 4, 5, 0, 1, 7]
// Explanation: The next permutation of the given array is {2, 4, 5, 0, 1, 7}.


class Solution {
    nextPermutation(arr) {
        const n = arr.length;

        // Step 1: Find the first decreasing element from the right
        let i = n - 2;
        while (i >= 0 && arr[i] >= arr[i + 1]) {
            i--;
        }

        if (i >= 0) {
            // Step 2: Find the smallest element greater than arr[i]
            let j = n - 1;
            while (arr[j] <= arr[i]) {
                j--;
            }
            // Step 3: Swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        // Step 4: Reverse the suffix starting at i + 1
        let start = i + 1;
        let end = n - 1;
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }

        return arr;
    }
}

// Example Usage
const solution = new Solution();
const arr = [2, 4, 1, 7, 5, 0];
console.log(solution.nextPermutation(arr)); // Output: [2, 4, 5, 0, 1, 7]
