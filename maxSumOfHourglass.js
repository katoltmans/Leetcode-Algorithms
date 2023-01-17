{
    /*
    Maximum Sum of an Hourglass

    You are given an m x n integer matrix grid.
    We define an hourglass as a part of the matrix with values in the form of an hourglass (3 values across the top and bottom, 1 value in the middle).
    Return the maximum sum of the elements of an hourglass.
    Note that an hourglass cannot be rotated and must be entirely contained within the matrix.
     */
}

var maxSum = function (grid) {
    // Hourglass shape: 3 sequential in row1, 1+ first index in second, and same 3 in 3rd
    // Iterate through Matrix until their are no more indexes on a row, and/or no more rows below

    let maxSum = 0;

    for (let i = 0; i < grid.length - 2; i++) {
        for (let j = 0; j < grid[0].length - 2; j++) {
            let sum = 0;
            // Add row 1
            sum += grid[i][j] + grid[i][j + 1] + grid[i][j + 2];
            // console.log("ROW1:", (grid[i][j] + grid[i][j+1] + grid[i][j+2]))
            // Add row2
            sum += grid[i + 1][j + 1];
            // console.log("ROW2:", (grid[i+1][j+1]));
            // Add row3
            sum += grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2];
            // console.log("ROW3:", (grid[i+2][j] + grid[i+2][j+1] + grid[i+2][j+2]))

            // console.log("SUM:", sum);

            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }

    return maxSum;
};

console.log("Maximum Sum of an Hourglass");
console.log(
    maxSum([
        [6, 2, 1, 3],
        [4, 2, 1, 5],
        [9, 2, 8, 7],
        [4, 1, 2, 9],
    ])
); // expect 30
console.log(
    maxSum([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
); // expect 35
