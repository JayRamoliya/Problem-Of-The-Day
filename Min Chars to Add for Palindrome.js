// Min Chars to Add for Palindrome (03-12-2024)

// Given a string s, the task is to find the minimum characters to be added at the front to make the string palindrome.

// Note: A palindrome string is a sequence of characters that reads the same forward and backward.


// Input: s = "abc"
// Output: 2
// Explanation: Add 'b' and 'c' at front of above string to make it palindrome : "cbabc"


class Solution {
    // Function to find the minimum number of characters needed to make the string palindrome.
    minChar(s) {
        let n = s.length;
        let i = 0, j = n - 1;
        let added = 0;

        while (i < j) {
            if (s[i] === s[j]) {
                i++;
                j--;
            } else {
                added++;
                i = 0; // Reset i to check the largest palindrome from the start of the remaining string
                j = n - 1 - added; // Shorten the length by the number of added characters
            }
        }

        return added;
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.minChar("abc")); // Output: 2
console.log(solution.minChar("aacecaaa")); // Output: 1
console.log(solution.minChar("abcd")); // Output: 3
