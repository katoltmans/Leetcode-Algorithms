{
    /*
    Is Subsequence

    Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
    A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without 
    disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/
}

var isSubsequence = function (s, t) {
    // Iterate through s
    // Build new string from found letters and compare

    let isSubstring = false;
    let compStr = t;
    let buildNewStr = "";

    for (let i = 0; i < s.length; i++) {
        if (compStr.includes(s[i])) {
            buildNewStr += s[i];
            index = compStr.indexOf(s[i]);
            // console.log("INDEX:", index);
            compStr = compStr.slice(index + 1);
        }
        // console.log("T:", compStr);
    }

    // console.log("BUILT STRING:", buildNewStr);

    if (s === buildNewStr) {
        isSubstring = true;
    }

    return isSubstring;
};

console.log("Is Subsequence");
console.log(isSubsequence("abc", "ahbgdc")); // expect true
console.log(isSubsequence("axc", "ahbgdc")); // expect false
