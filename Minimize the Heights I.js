// Minimize the Heights I (23-11-2024)

// Given a positive integer k and an array arr[] denoting heights of towers, you have to modify the height of each tower either by increasing or decreasing them by k only once.
// Find out what could be the possible minimum difference of the height of shortest and longest towers after you have modified each tower.

// Note: A slight modification of the problem can be found here. 


// Input: k = 2, arr[] = [1, 5, 8, 10]
// Output: 5
// Explanation: The array can be modified as [3, 3, 6, 8]. The difference between the largest and the smallest is 8 - 3 = 5.


class Solution {
    getMinDiff(k, arr) {
        arr.sort((a, b) => a - b);

        let n = arr.length;
        let result = arr[n - 1] - arr[0];
        console.log(result);
        

        let smallest = arr[0] + k;        
        let largest = arr[n - 1] - k;

        for (let i = 0; i < n - 1; i++) {
            let minHeight = Math.min(smallest, arr[i + 1] - k);
            let maxHeight = Math.max(largest, arr[i] + k);
            result = Math.min(result, maxHeight - minHeight);
        }

        return result;
    }
}

// Example usage:
const solution = new Solution();
const k = 2;
const arr = [1, 5, 8, 10];
console.log(solution.getMinDiff(k, arr)); // Output: 5
