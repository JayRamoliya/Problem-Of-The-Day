// Second Largest (22-nov-24)

// Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

// Note: The second largest element should not be equal to the largest element.


// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.

class Solution {
    getSecondLargest(arr) {
        let largest = -1;
        let secondLargest = -1;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > largest) {
                secondLargest = largest;
                largest = arr[i];
            } else if (arr[i] > secondLargest && arr[i] < largest) {
                secondLargest = arr[i];
            }
        }
        return secondLargest;
    }
}


let solution = new Solution();

console.log(solution.getSecondLargest([12, 35, 1, 10, 34, 1])); // Output: 34
console.log(solution.getSecondLargest([10, 10, 10])); // Output: -1
console.log(solution.getSecondLargest([1, 2])); // Output: 1
console.log(solution.getSecondLargest([5])); // Output: -1
