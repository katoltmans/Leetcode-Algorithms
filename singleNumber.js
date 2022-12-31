{
    /*
    Single Number

    Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
    You must implement a solution with a linear runtime complexity and use only constant extra space.
     */
}

var singleNumber = function (nums) {
    let single = 0;

    for (let i = 0; i < nums.length; i++) {
        single ^= nums[i];
        // console.log("SINGLE:", single, (single >>> 0).toString(2));
    }

    return single;

    //     let numsMap = {};

    //     for (let i=0; i<nums.length; i++) {
    //         if (numsMap[nums[i]]) {
    //             numsMap[nums[i]] ++;
    //         } else {
    //             numsMap[nums[i]] = 1;
    //         }
    //     }

    //     // console.log("NUMS MAP:", numsMap);

    //     for (let key in numsMap) {
    //         if (numsMap[key] === 1) {
    //             return key;
    //         }
    //     }
    //     return;
};

console.log("Single Number");
console.log(singleNumber([2, 2, 1])); // expect 1
console.log(singleNumber([4, 1, 2, 1, 2])); // expect 4
console.log(singleNumber([1])); // expect 1
