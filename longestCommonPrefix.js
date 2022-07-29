// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// /**
//  * @param {string[]} strs
//  * @return {string}
//  */

var longestCommonPrefix = (strs) => {
    //Find the shortest string in strs to compare to
    let shortestString = strs.reduce((priorString, currentString) =>
        currentString.length < priorString.length ? currentString : priorString
    );
    let prefix = shortestString;

    for (let currString of strs) {
        while (currString.slice(0, prefix.length) != prefix) {
            prefix = prefix.slice(0, -1);
        }
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
