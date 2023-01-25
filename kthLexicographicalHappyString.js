{
    /*
    The k-th Lexicographical String of All Happy Strings of Length

    A happy string is a string that:
        * consists only of letters of the set ['a', 'b', 'c'].
        * s[i] != s[i + 1] for all values of i from 1 to s.length - 1 (string is 1-indexed).
    For example, strings "abc", "ac", "b" and "abcbabcbcb" are all happy strings and strings "aa", "baa" and "ababbc" are not happy strings.
    
    Given two integers n and k, consider a list of all happy strings of length n sorted in lexicographical order.
    Return the kth string of this list or return an empty string if there are less than k happy strings of length n.
*/
}

var getHappyString = function (n, k) {
    // Begin with an array of "a", "b", "c"
    // Each time through the loop, add each letter to the end of each string, push it to a new array and then replace the original array
    // Sort the strings and return the kth string

    let letters = ["a", "b", "c"];
    let result = ["a", "b", "c"];

    // Early out
    if (n === 1 && k < 4) {
        return letters[k - 1];
    } else if (n === 0) {
        return "";
    }

    // Build the strings
    for (let i = 1; i < n; i++) {
        let newStrs = [];

        for (let j = 0; j < result.length; j++) {
            for (let k = 0; k < letters.length; k++) {
                let str = result[j];

                if (letters[k] !== str[str.length - 1]) {
                    newStrs.push((str += letters[k]));
                }
            }
        }
        // console.log("NEW STRINGS:", newStrs);
        result = newStrs;
    }

    return result[k - 1] ? result[k - 1] : "";
};

console.log("The k-th Lexicographical String of All Happy Strings of Length");
console.log(getHappyString(1, 3)); // expect "c"
console.log(getHappyString(1, 4)); // expect ""
console.log(getHappyString(3, 9)); // expect "cab"
console.log(getHappyString(0, 1)); // expect ""
