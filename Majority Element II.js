// Majority Element II (20-nov-24)

// You are given an array of integer arr[] where each number represents a vote to a candidate. Return the candidates that have votes greater than one-third of the total votes, If there's not a majority vote, return an empty array. 

// Note: The answer should be returned in an increasing format.

// Input: arr[] = [2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6]
// Output: [5, 6]
// Explanation: 5 and 6 occur more n/3 times.

class Solution {
    // Function to find the majority elements in the array
    findMajority(arr) {
        const n = arr.length;
        const threshold = Math.floor(n / 3);
        
        // Step 1: Identify potential candidates
        let candidate1 = null, candidate2 = null, count1 = 0, count2 = 0;
        
        for (let num of arr) {
            if (candidate1 === num) {
                count1++;
            } else if (candidate2 === num) {
                count2++;
            } else if (count1 === 0) {
                candidate1 = num;
                count1 = 1;
            } else if (count2 === 0) {
                candidate2 = num;
                count2 = 1;
            } else {
                count1--;
                count2--;
            }
        }
        
        // Step 2: Verify the candidates
        count1 = 0;
        count2 = 0;
        
        for (let num of arr) {
            if (num === candidate1) count1++;
            else if (num === candidate2) count2++;
        }
        
        const result = [];
        if (count1 > threshold) result.push(candidate1);
        if (count2 > threshold) result.push(candidate2);
        
        // Step 3: Return the result in sorted order
        return result.sort((a, b) => a - b);
    }
}

// Example Usage
const solution = new Solution();
const arr = [2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6];
console.log(solution.findMajority(arr)); // Output: [5, 6]
