{
    /*
    Isomorphic Strings

    Given two strings s and t, determine if they are isomorphic.
    Two strings s and t are isomorphic if the characters in s can be replaced to get t.
    All occurrences of a character must be replaced with another character while preserving the order of characters. 
    No two characters may map to the same character, but a character may map to itself.
     */
}

var isIsomorphic = function (s, t) {
    let isIsomorphic = true;
    let sMap = {};
    let usedLetters = [];

    // Early return
    if (s.length !== t.length) {
        return isIsomorphic;
    }

    for (let i = 0; i < s.length; i++) {
        if (!!sMap[s[i]]) {
            if (sMap[s[i]] !== t[i]) {
                isIsomorphic = false;
                break;
            }
        } else {
            if (usedLetters.includes(t[i])) {
                isIsomorphic = false;
                break;
            } else {
                sMap[s[i]] = t[i];
                usedLetters.push(t[i]);
            }
        }
    }

    // console.log("SARR:", sArr, "TARR:", tArr);

    return isIsomorphic;
};

console.log("Isomorphic Strings");
console.log(isIsomorphic("egg", "add")); // expect true
console.log(isIsomorphic("foo", "bar")); // expect false
console.log(isIsomorphic("paper", "title")); // expect true
console.log(isIsomorphic("fellow", "matter")); // expect true
console.log(isIsomorphic("fellow", "pepper")); // expect false
console.log(isIsomorphic("", "")); // expect true
