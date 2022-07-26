var pivotIndex = function (nums) {
    let totalSum = 0;
    let leftSum = 0;
    let pivotIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
    }
    if (nums[0] === totalSum) {
        return 0;
    }

    for (let j = 0; j < nums.length; j++) {
        leftSum += nums[j];
        console.log("ls:", leftSum);

        if (leftSum === totalSum - leftSum - nums[j + 1]) {
            pivotIndex = j + 1;
            console.log("pivot:", pivotIndex);
            break;
        }
    }

    if (pivotIndex !== 0) {
        return pivotIndex;
    } else {
        return -1;
    }
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log();
console.log(pivotIndex([-1, -1, 0, 0, -1, -1]));
console.log();
console.log(pivotIndex([2, -1, 1]));
console.log();
console.log(pivotIndex([1, 2, 3]));
