// Anagram (30-11-2024)

// Given two strings s1 and s2 consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, act and tac are an anagram of each other. Strings s1 and s2 can only contain lowercase alphabets.

// Note: You can assume both the strings s1 & s2 are non-empty.


// Input: s1 = "geeks", s2 = "kseeg"
// Output: true
// Explanation: Both the string have same characters with same frequency. So, they are anagrams.

class Solution {
    // Function to check whether two strings are anagrams of each other
    areAnagrams(s1, s2) {
        // If lengths of the strings are not equal, they cannot be anagrams
        if (s1.length !== s2.length) return false;

        // Create frequency maps for both strings
        const countMap1 = new Map();
        const countMap2 = new Map();

        // Populate the frequency maps
        for (let char of s1) {
            countMap1.set(char, (countMap1.get(char) || 0) + 1);
        }

        for (let char of s2) {
            countMap2.set(char, (countMap2.get(char) || 0) + 1);
        }

        // Compare both frequency maps
        for (let [key, value] of countMap1.entries()) {
            if (countMap2.get(key) !== value) {
                return false;
            }
        }

        return true;
    }
}

// Example usage
const solution = new Solution();
console.log(solution.areAnagrams("geeks", "kseeg")); // Output: true
console.log(solution.areAnagrams("hello", "world")); // Output: false
