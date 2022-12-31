{
    /*
    Plus One

    You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
    The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
    Increment the large integer by one and return the resulting array of digits.
     */
}

var plusOne = function (digits) {
    let num = BigInt(digits.join("")) + BigInt(1);
    // console.log("NUM:", num);
    let newArr = Array.from(String(num), Number);
    // console.log("NEWARR:", newArr);

    return newArr;
};

console.log("Plus One");
console.log(plusOne([1, 2, 3])); // expect [1,2,4]
console.log(plusOne([4, 3, 2, 1])); // expect [4,3,2,2]
console.log(plusOne([9])); // expect [1,0]
