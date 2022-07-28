//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
//The relative order of the elements should be kept the same.

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var removeDuplicates = function (nums) {
    let index = 1;

    for (i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            nums[index] = nums[i];
            index++;
        }
    }
    return console.log("nums: " + nums, "index: " + index);
};

removeDuplicates([1, 1, 2]);
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
