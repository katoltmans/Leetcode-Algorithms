/**
 * @param {number[][]} accounts
 * @return {number}
 * Algorithm to sum all account totals of each customer and determine which customer has the most wealth
 */
var maximumWealth = function (accounts) {
    let max = 0;
    let sum = 0;

    //Iterate through customer array
    for (let i = 0; i < accounts.length; i++) {
        // Iterate through and total the bank accounts of each customer
        for (let j = 0; j < accounts[i].length; j++) {
            sum = sum + accounts[i][j];
        }
        // Set as max if sum for this account is larger
        if (sum > max) {
            max = sum;
        }
        // Reset the sum for the next customer
        sum = 0;
    }
    return max;
};

console.log(
    maximumWealth([
        [1, 2, 3],
        [3, 2, 1],
    ])
);
console.log(
    maximumWealth([
        [1, 5],
        [7, 3],
        [3, 5],
    ])
);
console.log(
    maximumWealth([
        [2, 8, 7],
        [7, 1, 3],
        [1, 9, 5],
    ])
);
