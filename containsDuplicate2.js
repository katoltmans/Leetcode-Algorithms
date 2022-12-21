{
    /*
    Contains Duplicate II

    Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
     */
}

var containsNearbyDuplicate = function (nums, k) {
    let numsMap = [];
    for (let i = 0; i < nums.length; i++) {
        if (i - numsMap[nums[i]] <= k) {
            return true;
        } else {
            numsMap[nums[i]] = i;
        }
    }
    return false;
};

console.log("Contains Duplicate II");
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // expect true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // expect true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // expect false
