// Implement Atoi (28-11-2024)

// Cases for atoi() conversion:

// Skip any leading whitespaces.
// Check for a sign (‘+’ or ‘-‘), default to positive if no sign is present.
// Read the integer by ignoring leading zeros until a non-digit character is encountered or end of the string is reached. If no digits are present, return 0.
// If the integer is greater than 231 – 1, then return 231 – 1 and if the integer is smaller than -231, then return -231.

// Input: s = "-123"
// Output: -123
// Explanation: It is possible to convert -123 into an integer so we returned in the form of an integer


class Solution {
    myAtoi(s) {
        let sign = 1, res = 0, idx = 0;

        // Ignore leading whitespaces
        while (idx < s.length && s[idx] === ' ') {
            idx++;
        }

        // Store the sign of number
        if (idx < s.length && (s[idx] === '-' || s[idx] === '+')) {
            if (s[idx] === '-') {
                sign = -1;
            }
            idx++;
        }

        // Construct the number digit by digit
        while (idx < s.length && s[idx] >= '0' && s[idx] <= '9') {

            // Handling overflow/underflow test case
            if ((res > Math.pow(2, 31) / 10) || ((res === Math.floor(Math.pow(2, 31) / 10)) && (s[idx] - '0' > 7))) {

                return sign === 1 ? (Math.pow(2, 31) - 1) : -Math.pow(2, 31);
            }

            // Append current digit to the result
            res = 10 * res + (s[idx] - '0');
            idx++;
        }
        return (res * sign == -0 ? 0 : res * sign);
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.myAtoi("   -123")); // Output: -123
console.log(solution.myAtoi("4193 with words")); // Output: 4193
console.log(solution.myAtoi("words and 987")); // Output: 0
console.log(solution.myAtoi("-91283472332")); // Output: -2147483648 (INT_MIN)
console.log(solution.myAtoi("91283472332"));  // Output: 2147483647 (INT_MAX)
