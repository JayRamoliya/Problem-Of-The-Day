class Solution {
    secondLargest(arr) {
        let largest = -1;
        let secondLargest = -1;
        for (let num of arr) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } 
            else if (num < largest && num > secondLargest) {
                secondLargest = num;
            }
        }
        return secondLargest;
    }
}

const arr = [12, 35,35, 1, 10, 34, 1];
console.log(new Solution().secondLargest(arr));