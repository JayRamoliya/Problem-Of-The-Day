// Reverse an Array (17-nov-24)(24-11-2024)

// You are given an array of integers arr[]. Your task is to reverse the given array.

// Input: arr = [1, 4, 3, 2, 6, 5]
// Output: [5, 6, 2, 3, 4, 1]
// Explanation: The elements of the array are 1 4 3 2 6 5. After reversing the array, the first element goes to the last position, the second element goes to the second last position and so on. Hence, the answer is 5 6 2 3 4 1.



// ✅ The reverse method is used here to reverse the elements of the array in-place. It modifies the original array and also returns the reversed array.

class Solution {
    // Function to reverse the array.
    reverseArray(arr) {
        // Reverse the array using the built-in reverse method.
        return arr.reverse();
    }
}

// Example usage:
const solution = new Solution();

const arr = [1, 4, 3, 2, 6, 5];
const reversedArr = solution.reverseArray(arr);
console.log(reversedArr); // Output: [5, 6, 2, 3, 4, 1]


// ✅ This approach swaps elements from the beginning and the end of the array, working toward the center.

class Solution2 {
    // Function to reverse the array.
    reverseArray2(arr) {
        const n = arr.length;
        for (let i = 0; i < Math.floor(n / 2); i++) {
            // Swap elements from both ends.
            [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];
        }
        return arr;
    }
}

// Example usage:
const solution2 = new Solution2();
const arr2 = [1, 4, 3, 2, 6, 5];
const reversedArr2 = solution2.reverseArray2(arr2);
console.log(reversedArr2); // Output: [5, 6, 2, 3, 4, 1]
