{
    /*
    Relative Sort Array

    Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
    Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. 
    Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.
     */
}

var relativeSortArray = function (arr1, arr2) {
    // Create two arrays push matching to one and non matching to the other

    let result = [];
    let nonMatching = [];
    let arr1Map = {};

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            if (!!arr1Map[arr1[i]]) {
                arr1Map[arr1[i]]++;
            } else {
                arr1Map[arr1[i]] = 1;
            }
        } else {
            nonMatching.push(arr1[i]);
        }
    }

    // console.log("ARR1 MAP:", arr1Map, "NONMATCHING:", nonMatching);

    for (let i = 0; i < arr2.length; i++) {
        let count = arr1Map[arr2[i]];

        while (count > 0) {
            result.push(arr2[i]);
            count--;
        }
    }

    nonMatching.sort((a, b) => a - b);

    for (let j = 0; j < nonMatching.length; j++) {
        result.push(nonMatching[j]);
    }
    return result;
};

console.log("Relative Sort Array");
console.log(
    relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
); // expect [2,2,2,1,4,3,3,9,6,7,19]
console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6])); // expect [22,28,8,6,17,44]
