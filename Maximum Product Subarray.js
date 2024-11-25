// Maximum Product Subarray (25-11-2024)

// Given an array arr[] that contains positive and negative integers (may contain 0 as well). Find the maximum product that we can get in a subarray of arr.

// Note: It is guaranteed that the output fits in a 32-bit integer.


// Input: arr[] = [-2, 6, -3, -10, 0, 2]
// Output: 180
// Explanation: The subarray with maximum product is {6, -3, -10} with product = 6 * (-3) * (-10) = 180.



class Solution {
    maxProduct(arr) {
        if (arr.length === 0) return 0;

        let maxProduct = arr[0]; 
        let currentMax = arr[0];  
        let currentMin = arr[0];  

        for (let i = 1; i < arr.length; i++) {
            const num = arr[i];

            if (num === 0) {
                currentMax = 1;
                currentMin = 1;
                maxProduct = Math.max(maxProduct, 0);
                continue;
            }

            const tempMax = currentMax;

            currentMax = Math.max(num, num * currentMax, num * currentMin);
            currentMin = Math.min(num, num * tempMax, num * currentMin);

            maxProduct = Math.max(maxProduct, currentMax);
        }

        return maxProduct;
    }
}

// Example usage:
const solution = new Solution();
const arr = [-2, 6, -3, -10, 0, 2];
console.log(solution.maxProduct(arr)); // Output: 180
