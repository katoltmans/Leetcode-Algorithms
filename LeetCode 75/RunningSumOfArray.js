// // Sum array as moved through
// var runningSum = function (nums) {
//     let runSum = [nums[0]];
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (i == 0) {
//             sum = nums[0];
//         } else {
//             sum += nums[i];
//             runSum.push(sum);
//         }
//     }
//     return runSum;
// };

// console.log(runningSum[(1, 2, 3, 4)]);
// console.log(runningSum[(1, 1, 1, 1, 1)]);
// console.log(runningSum[(1, 4, 6, 16, 17)]);

// More efficient version?
var runningSum = function (nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            sum = nums[0];
        } else {
            sum += nums[i];
            runSum.push(sum);
        }
    }
    return runSum;
};

console.log(runningSum[(1, 2, 3, 4)]);
console.log(runningSum[(1, 1, 1, 1, 1)]);
console.log(runningSum[(1, 4, 6, 16, 17)]);
