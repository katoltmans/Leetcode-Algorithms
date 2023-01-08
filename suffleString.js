{
    /*
    Shuffle String

    You are given a string s and an integer array indices of the same length. 
    The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
    Return the shuffled string.
     */
}

var restoreString = function (s, indices) {
    let strMap = {};

    for (i = 0; i < s.length; i++) {
        strMap[indices[i]] = s[i];
    }
    // console.log("STRMAP:", strMap);

    let result = "";

    for (let key in strMap) {
        result += strMap[key];
    }
    return result;
};

console.log("Shuffle String");
console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])); // expect "leetcode"
console.log(restoreString("abc", [0, 1, 2])); // expect "abc"
console.log(restoreString("ackWid owBl", [2, 3, 4, 6, 7, 8, 5, 9, 10, 0, 1])); // expect "Black Widow"
