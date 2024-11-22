// Stock Buy and Sell – Max one Transaction Allowed (22-nov-24)

// Given an array prices[] of length n, representing the prices of the stocks on different days. The task is to find the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed. Here one transaction means 1 buy + 1 Sell. If it is not possible to make a profit then return 0.

// Note: Stock must be bought before being sold.

// Input: prices[] = [7, 10, 1, 3, 6, 9, 2]
// Output: 8
// Explanation: You can buy the stock on day 2 at price = 1 and sell it on day 5 at price = 9. Hence, the profit is 8.

class Solution {
    maximumProfit(prices) {
        if (prices.length < 2) return 0;

        let minPrice = prices[0];
        let maxProfit = 0;

        for (let i = 1; i < prices.length; i++) {
            const profit = prices[i] - minPrice;

            maxProfit = Math.max(maxProfit, profit);

            minPrice = Math.min(minPrice, prices[i]);
        }

        return maxProfit;
    }
}


// Example usage:
const solution = new Solution();
const prices = [7, 10, 1, 3, 6, 9, 2];
// console.log(solution.maximumProfit(prices)); 
console.log(new Solution().maximumProfit(prices)); // Output: 8

/*
Execution Step-by-Step:

Start with:

minPrice = 7
maxProfit = 0
Day 1: prices[1] = 10

Profit = 10 - 7 = 3
Update maxProfit = 3
minPrice = 7 remains unchanged.
Day 2: prices[2] = 1

New minPrice = 1
No profit is calculated since we're updating the minPrice.
Day 3: prices[3] = 3

Profit = 3 - 1 = 2
maxProfit = 3 (no change).
Day 4: prices[4] = 6

Profit = 6 - 1 = 5
Update maxProfit = 5.
Day 5: prices[5] = 9

Profit = 9 - 1 = 8
Update maxProfit = 8.
Day 6: prices[6] = 2

No profit higher than maxProfit, and minPrice remains 1.
*/