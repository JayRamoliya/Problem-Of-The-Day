// Non Repeating Character (01-12-2024)

// Given a string s consisting of lowercase Latin Letters. Return the first non-repeating character in s. If there is no non-repeating character, return '$'.
// Note: When you return '$' driver code will output -1.


// Input: s = "geeksforgeeks"
// Output: 'f'
// Explanation: In the given string, 'f' is the first character in the string which does not repeat.

class Solution {
    // Function to find the first non-repeating character in a string.
    nonRepeatingChar(s) {
        // Create a map to store the frequency of each character
        const charCount = new Map();

        // Count the frequency of each character in the string
        for (let char of s) {
            charCount.set(char, (charCount.get(char) || 0) + 1);
        }

        // Iterate over the string and return the first character with frequency 1
        for (let char of s) {
            if (charCount.get(char) === 1) {
                return char; // Return the first non-repeating character
            }
        }

        // If no non-repeating character exists, return '$'
        return '$';
    }
}

// Example Usage
const solution = new Solution();
console.log(solution.nonRepeatingChar("geeksforgeeks")); // Output: 'f'
console.log(solution.nonRepeatingChar("aabbcc")); // Output: '$' (Driver code outputs -1)
