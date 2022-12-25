{
    /*
    Valid Anagram

    Given two strings s and t, return true if t is an anagram of s, and false otherwise.
    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
     */
}

var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let sSort = s.split("").sort().join("");
    let tSort = t.split("").sort().join("");
    let isAnagram = false;

    sSort === tSort ? (isAnagram = true) : (isAnagram = false);

    return isAnagram;
};

console.log("Valid Anagram");
console.log(isAnagram("anagram", "nagaram")); // expect true
console.log(isAnagram("rat", "car")); // expect false
