{
    /*
    Sum of Unique Elements

    You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
    Return the sum of all the unique elements of nums.
     */
}

var sumOfUnique = function (nums) {
    // Create a hashmap and then sum any key with a value of one

    let numsMap = {};
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!!numsMap[nums[i]]) {
            numsMap[nums[i]]++;
        } else {
            numsMap[nums[i]] = 1;
        }
    }

    for (let key in numsMap) {
        if (numsMap[key] === 1) {
            sum += parseInt(key);
        }
    }

    return sum;
};

console.log("Sum of Unique Elements");
console.log(sumOfUnique([1, 2, 3, 2])); // expect 4
console.log(sumOfUnique([1, 1, 1, 1, 1])); // expect 0
console.log(sumOfUnique([1, 2, 3, 4, 5])); // expect 15
console.log(sumOfUnique([1, -4, 3, 2])); // expect 2
