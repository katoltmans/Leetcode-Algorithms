{
    /*
    Sum of All Odd Length Subarrays

    Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.
    A subarray is a contiguous subsequence of the array.
     */
}

var sumOddLengthSubarrays = function (arr) {
    // Create subarrays with only odd values
    // Sum the values

    let subArr = [];
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j += 2) {
            subArr = arr.slice(i, j + 1);
            // console.log("SUBARR:", subArr);
            let sum = subArr.reduce((a, b) => a + b);
            // console.log("SUM:", sum);
            total += sum;
            // console.log("TOTAL:", total);
        }
    }
    return total;
};

console.log("Sum of All Odd Length Subarrays");
console.log(sumOddLengthSubarrays([10, 11, 12])); // expect 66
console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3])); // expect 58
console.log(sumOddLengthSubarrays([1, 2])); // expect 3
console.log(sumOddLengthSubarrays([])); // expect 0
