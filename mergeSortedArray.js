{
    /*
    Merge Sorted Array

    You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements 
    in nums1 and nums2 respectively.

    Merge nums1 and nums2 into a single array sorted in non-decreasing order.

    The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
    To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
    and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
     */
}

var merge = function (nums1, m, nums2, n) {
    let pointer = nums1.length - 1;
    m--;
    n--;

    if (nums1.length === 0) {
        return nums2;
    } else if (nums2.length === 0) {
        return nums1;
    }

    while (n >= 0) {
        if (nums1[m] > nums2[n]) {
            nums1[pointer] = nums1[m];
            m--;
        } else {
            nums1[pointer] = nums2[n];
            n--;
        }
        pointer--;
    }

    // for (let i=m; i< nums1.length; i++) {
    //         if (nums1[i] ===0) {
    //             nums1[i] = nums2[j];
    //             j++;
    //         }
    // }
    // nums1.sort((a,b) => a-b);

    return nums1;
};

console.log("Merge Sorted Array");
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // expect [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); // expect [1]
console.log(merge([0], 0, [1], 1)); // expect [1]
