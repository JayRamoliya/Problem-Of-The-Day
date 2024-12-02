// Search Pattern (KMP-Algorithm) (02-12-2024)

// Given two strings, one is a text string txt and the other is a pattern string pat. The task is to print the indexes of all the occurrences of the pattern string in the text string. Use 0-based indexing while returning the indices. 
// Note: Return an empty list in case of no occurrences of pattern.


// Input: txt = "abcab", pat = "ab"
// Output: [0, 3]
// Explanation: The string "ab" occurs twice in txt, one starts at index 0 and the other at index 3. 

class Solution {
    search(pat, txt) {
        const result = []; // To store the starting indices of occurrences
        const patLen = pat.length; // Length of the pattern
        const txtLen = txt.length; // Length of the text

        // Loop through the text to find all occurrences of the pattern
        for (let i = 0; i <= txtLen - patLen; i++) {
            // Check if the substring matches the pattern
            if (txt.substring(i, i + patLen) === pat) {
                result.push(i); // Add the index to the result
            }
        }

        return result; // Return the indices
    }
}

// Example usage:
const solution = new Solution();
const txt = "abcab";
const pat = "ab";
console.log(solution.search(pat, txt)); // Output: [0, 3]
