{
    /*
    Running Sum of 1d Array

    Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
     */
}

const runningSum = (nums) => {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            sum = nums[0];
        } else {
            sum += nums[i];
            nums[i] = sum;
        }
    }
    return nums;
};

console.log("Running Sum of 1d Array");
console.log(runningSum([1, 2, 3, 4])); // expect [1,3,6,10]
console.log(runningSum([1, 1, 1, 1, 1])); // expect [1,2,3,4,5]
console.log(runningSum([3, 1, 2, 10, 1])); // expect [3,4,6,16,17]
