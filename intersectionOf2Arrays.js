{
    /*
    Intersection of Two Arrays

    Given two integer arrays nums1 and nums2, return an array of their intersection. 
    Each element in the result must be unique and you may return the result in any order.
     */
}

var intersection = function (nums1, nums2) {
    let result = [];

    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i]) && !result.includes(nums1[i])) {
            result.push(nums1[i]);
        }
    }

    return result;
};

console.log("Intersection of Two Arrays");
console.log(intersection([1, 2, 2, 1], [2, 2])); // expect [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // expect [4,9]
console.log(
    intersection([-1, 100, 86, 17, 3333, 914, -4], [5, -4, -3, -2, -1])
); // expect [-1, -4]
