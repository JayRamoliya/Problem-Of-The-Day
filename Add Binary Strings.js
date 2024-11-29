// Add Binary Strings (29-11-2024)


// Given two binary strings s1 and s2 consisting of only 0s and 1s. Find the resultant string after adding the two Binary Strings.
// Note: The input strings may contain leading zeros but the output string should not have any leading zeros.

// Input: s1 = "1101", s2 = "111"
// Output: 10100
// Explanation:
//  1101
// + 111
// 10100

class Solution {
    addBinary(s1, s2) {
        let result = '';
        let carry = 0;
        let i = s1.length - 1;
        let j = s2.length - 1;

        while (i >= 0 || j >= 0 || carry > 0) {
            let bit1 = i >= 0 ? parseInt(s1[i]) : 0;
            let bit2 = j >= 0 ? parseInt(s2[j]) : 0;

            let sum = bit1 + bit2 + carry;

            result = (sum % 2) + result;

            carry = Math.floor(sum / 2);

            i--;
            j--;
        }

        return result;
    }
}

// Example usage:
const solution = new Solution();
const s1 = "1101";
const s2 = "111";
console.log(solution.addBinary(s1, s2)); // Output: "10100"
