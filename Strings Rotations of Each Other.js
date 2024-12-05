// Strings Rotations of Each Other (04-12-2024)

// You are given two strings of equal lengths, s1 and s2. The task is to check if s2 is a rotated version of the string s1.

// Note: The characters in the strings are in lowercase.


// Input: s1 = "abcd", s2 = "cdab"
// Output: true
// Explanation: After 2 right rotations, s1 will become equal to s2.


class Solution {
    // Function to check if two strings are rotations of each other or not.
    areRotations(s1, s2) {
        // Check if lengths are different
        if (s1.length !== s2.length) {
            return false;
        }

        // Concatenate s1 with itself
        const concatenated = s1 + s1;

        // Check if s2 is a substring of concatenated string
        return concatenated.includes(s2);
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.areRotations("abcd", "cdab")); // Output: true
console.log(solution.areRotations("abcd", "acbd")); // Output: false
