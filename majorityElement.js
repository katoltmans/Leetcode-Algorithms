{
    /*
    Majority Element

    Given an array nums of size n, return the majority element.
    The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/
}

const majorityElement = (nums) => {
    nums.sort((a, b) => a - b);
    let count = 1;
    // console.log("NUMS:", nums);

    // Early out
    if (nums.length < 2) {
        return nums[0];
    }

    for (let i = 0; i < nums.length; i++) {
        // console.log("NUMS[I]:", nums[i], "I:", i, "COUNT:", count);
        if (nums[i] !== nums[i + 1]) {
            // console.log("Not Equal");
            if (count > nums.length / 2) {
                return nums[i];
            } else {
                count = 1;
            }
        } else {
            count++;
        }
    }

    //     let numsMap = {};

    //     for (let i=0; i< nums.length; i++) {
    //         if(numsMap[nums[i]]) {
    //             numsMap[nums[i]] +=1;
    //         } else {
    //             numsMap[nums[i]] = 1;
    //         }
    //     }

    //     for (let key in numsMap) {
    //         if (numsMap[key] > (nums.length/2)) {
    //             return key;
    //         }
    //     }
    return;
};

console.log("Majority Element");
console.log(majorityElement([3, 2, 3])); // expect 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // expect 2
console.log();
