// When given an array of integers, return indices of two numbers that add up to a target

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

var twoSum = function (nums, target) {
    indices = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (j !== i && nums[i] + nums[j] === target) {
                indices.push(i);
                indices.push(j);
                break;
            }
        }
        if (indices.length === 2) {
            break;
        }
    }
    return indices;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
