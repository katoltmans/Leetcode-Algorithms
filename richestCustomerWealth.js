/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let max = 0;
    let sum = 0;

    for (let i = 0; i < accounts.length; i++) {
        for (let j = 0; j < accounts[i].length; j++) {
            sum = sum + accounts[i][j];
        }
        if (sum > max) {
            max = sum;
        }
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
