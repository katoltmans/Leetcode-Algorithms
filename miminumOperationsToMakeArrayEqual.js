{
    /*
    Minimum Operations to Make Array Equal

    You have an array arr of length n where arr[i] = (2 * i) + 1 for all valid values of i (i.e., 0 <= i < n).
    In one operation, you can select two indices x and y where 0 <= x, y < n and subtract 1 from arr[x] and add 1 to arr[y] (i.e., perform arr[x] -=1 and arr[y] += 1). 
    The goal is to make all the elements of the array equal. It is guaranteed that all the elements of the array can be made equal using some operations.
    Given an integer n, the length of the array, return the minimum number of operations needed to make all the elements of arr equal.
     */
}

var minOperations = function (n) {
    // The matching number will be n for arrays with odd lengths, and the average of the middle numbers for even length arrays
    // Divide the array in half and sum the difference between the common number and the array values

    let sum = 0;
    let arr = [];
    let half = Math.floor(n / 2);
    let num = 1;

    // Create the array
    for (let i = 0; i < half; i++) {
        arr.push(num);
        num += 2;
    }

    // console.log("ARR:", arr);

    // Sum the difference between each value in the half array and n
    for (let i = 0; i < arr.length; i++) {
        sum += n - arr[i];
    }
    return sum;
};

console.log("Minimum Operations to Make Array Equal");
console.log(minOperations(3)); // expect 2
console.log(minOperations(6)); // expect 9
console.log(minOperations(11)); // expect 30
console.log(minOperations(0)); // expect 0
