// Rotate Array (18-nov-24)

// Given an unsorted array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer. Do the mentioned change in the array in place.


// Note: Consider the array as circular.

// Input: arr[] = [1, 2, 3, 4, 5], d = 2
// Output: [3, 4, 5, 1, 2]
// Explanation: when rotated by 2 elements, it becomes 3 4 5 1 2.

// Input: arr[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], d = 3
// Output: [8, 10, 12, 14, 16, 18, 20, 2, 4, 6]
// Explanation: when rotated by 3 elements, it becomes 8 10 12 14 16 18 20 2 4 6.

// Input: arr[] = [7, 3, 9, 1], d = 9
// Output: [3, 9, 1, 7]
// Explanation: when we rotate 9 times, we'll get 3 9 1 7 as resultant array.


class Solution {
    // Function to rotate the array to the left by d steps
    rotateArray(arr, d) {
        const n = arr.length;
        console.log(n);
        
        // Ensure d is within bounds of the array length
        d = d % n;
        console.log(d);
        

        // Reverse the three segments of the array
        this.reverse(arr, 0, d - 1);   // Reverse the first d elements
        this.reverse(arr, d, n - 1);  // Reverse the remaining elements
        this.reverse(arr, 0, n - 1);  // Reverse the entire array
    }

    // Helper function to reverse a segment of the array
    reverse(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
}

// Example usage
const solution = new Solution();
const arr = [1, 2, 3, 4, 5];
const d = 2;

solution.rotateArray(arr, d);
console.log(arr); // Output: [3, 4, 5, 1, 2]
