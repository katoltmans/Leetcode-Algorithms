{
    /*
    Remove Element

    Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
    Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. 
    More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter 
    what you leave beyond the first k elements.
    Return k after placing the final result in the first k slots of nums.
     */
}

var removeElement = function (nums, val) {
    let k = 0;
    let temp;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            temp = nums[i];
            // k++;
            // let count = 0;
            for (let j = nums.length - 1; j >= i; j--) {
                if (nums[j] !== temp) {
                    nums[i] = nums[j];
                    nums[j] = temp;
                    // count++;
                    break;
                }
                //
            }
        }
    }
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === val) {
            k++;
        }
    }

    console.log("k:", k);
    console.log(nums);

    return nums.length - k;
};

console.log("Remove Element");
console.log(removeElement([3, 2, 2, 3], 3)); // expect [2,2,3,3]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // expect [0,1,4,0,3,2,2,2]
console.log(removeElement([5, -1, 3, 4, -1, 4, 3, -5, -1, 9], -1)); // expect [5,3,4,4,3,-5,9,-1,-1,-1]
