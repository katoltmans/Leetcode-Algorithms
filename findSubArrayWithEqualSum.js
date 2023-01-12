{
    /*
    Find Subarrays With Equal Sum

    Given a 0-indexed integer array nums, determine whether there exist two subarrays of length 2 with equal sum. Note that the two subarrays must begin at different indices.
    Return true if these subarrays exist, and false otherwise.
    A subarray is a contiguous non-empty sequence of elements within an array.
     */
}

var findSubarrays = function (nums) {
    // Iterate through an array summing pairs with each iteration
    // Compare sums to proceeding sums of pairs

    // Sums of pairs sequentially through the array
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i] + nums[i + 1];

        // Comparative sums through the rest of the array
        for (let j = i + 1; j < nums.length; j++) {
            let compair = nums[j] + nums[j + 1];
            // console.log("SUM:", sum, "COMPAIR:", compair);

            if (sum === compair) {
                return true;
            }
        }
    }

    return false;
};

console.log("Find Subarrays With Equal Sum");
console.log(findSubarrays([4, 2, 4])); // expect true
console.log(findSubarrays([1, 2, 3, 4, 5])); // expect false
console.log(findSubarrays([0, 0, 0])); // expect true
