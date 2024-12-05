// Sort 0s, 1s and 2s (05-12-2024)

// Given an array arr[] containing only 0s, 1s, and 2s. Sort the array in ascending order.

// Input: arr[] = [0, 1, 2, 0, 1, 2]
// Output: [0, 0, 1, 1, 2, 2]
// Explanation: 0s 1s and 2s are segregated into ascending order.

class Solution {
    // Function to sort an array of 0s, 1s, and 2s
    sort012(arr) {
        let low = 0, mid = 0, high = arr.length - 1;

        // Traverse the array
        while (mid <= high) {
            if (arr[mid] === 0) {
                // Swap arr[low] and arr[mid] and increment low and mid
                [arr[low], arr[mid]] = [arr[mid], arr[low]];
                low++;
                mid++;
            } else if (arr[mid] === 1) {
                // Move mid pointer
                mid++;
            } else {
                // Swap arr[mid] and arr[high] and decrement high
                [arr[mid], arr[high]] = [arr[high], arr[mid]];
                high--;
            }
        }
    }
}

// Example usage:
const solution = new Solution();
let arr = [0, 1, 2, 0, 1, 2];
solution.sort012(arr);
console.log(arr); // Output: [0, 0, 1, 1, 2, 2]
