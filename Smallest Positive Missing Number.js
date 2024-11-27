// Smallest Positive Missing Number (27-11-2024)

// ou are given an integer array arr[]. Your task is to find the smallest positive number missing from the array.

// Note: Positive number starts from 1. The array can have negative integers too.


// Input: arr[] = [2, -3, 4, 1, 1, 7]
// Output: 3
// Explanation: Smallest positive missing number is 3.

class Solution {
    missingNumber(arr) {
        let n = arr.length;

        // Step 1: Replace non-positive numbers and numbers greater than n with a placeholder (n+1).
        for (let i = 0; i < n; i++) {
            if (arr[i] <= 0 || arr[i] > n) {
                arr[i] = n + 1;
            }
        }
        // console.log(arr);
        
        // Step 2: Mark numbers as negative to indicate presence.
        for (let i = 0; i < n; i++) {
            let num = Math.abs(arr[i]);
            if (num <= n) {
                arr[num - 1] = -Math.abs(arr[num - 1]);
            }
        }
        // console.log(arr);

        // Step 3: Find the first positive index.
        for (let i = 0; i < n; i++) {
            if (arr[i] > 0) {
                return i + 1;
            }
        }
        console.log(arr);
        

        // If all numbers are present, the missing number is n+1.
        return n + 1;
    }
}

// Example usage
let solution = new Solution();
let arr = [2, -3, 4, 1, 1, 7];
console.log(solution.missingNumber(arr)); // Output: 3
