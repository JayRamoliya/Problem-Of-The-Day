// Find H-Index (06-12-2024)

// Given an integer array citations[], where citations[i] is the number of citations a researcher received for the ith paper. The task is to find the H-index.

// H-Index is the largest value such that the researcher has at least H papers that have been cited at least H times.


// Input: citations[] = [3, 0, 5, 3, 0]
// Output: 3
// Explanation: There are at least 3 papers (3, 5, 3) with at least 3 citations.

class Solution {
    // Function to find H-Index
    hIndex(citations) {
        // Sort citations in descending order
        citations.sort((a, b) => b - a);

        let hIndex = 0;

        // Find the maximum H-index
        for (let i = 0; i < citations.length; i++) {
            if (citations[i] >= i + 1) {
                hIndex = i + 1;
            } else {
                break;
            }
        }

        return hIndex;
    }
}

// Example usage
const solution = new Solution();
const citations = [3, 0, 5, 3, 0];
console.log(solution.hIndex(citations)); // Output: 3
