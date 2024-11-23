// Move All Zeroes to End (23-11-2024)

// Given an array arr[]. Push all the zeros of the given array to the right end of the array while maintaining the order of non-zero elements. Do the mentioned change in the array in place.


// Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
// Output: [1, 2, 4, 3, 5, 0, 0, 0]
// Explanation: There are three 0s that are moved to the end.

class Solution {
    pushZerosToEnd(arr) {
        let n = arr.length;
        let nonZeroIndex = 0; 
        
        for (let i = 0; i < n; i++) {
            if (arr[i] !== 0) {
                [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
                nonZeroIndex++;
            }
        }
    }
}

// Example usage:
let solution = new Solution();
let arr = [1, 2, 0, 4, 3, 0, 5, 0];
solution.pushZerosToEnd(arr);
console.log(arr); // Output: [1, 2, 4, 3, 5, 0, 0, 0]
