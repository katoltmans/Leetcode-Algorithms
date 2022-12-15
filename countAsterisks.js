{
    /*
    Count Asterisks

    You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, 
    the 3rd and 4th '|' make a pair, and so forth.

    Return the number of '*' in s, excluding the '*' between each pair of '|'. Note that each '|' will belong to exactly one pair.
     */
}

var countAsterisks = function (s) {
    // Iterate through the string, turning sections on and off each time a "|" occurs

    let isValid = true;
    let count = 0;

    // If isValid is true and the character is a "*", add to count
    for (let i = 0; i < s.length; i++) {
        if (isValid == true && s[i] === "*") {
            count++;
        }

        if (s[i] === "|") {
            isValid = !isValid;
        }
        // console.log("S:", s[i], "ISVALID:", isValid, "COUNT:", count);
    }
    return count;
};

console.log("Count Asterisks");
console.log(countAsterisks("l|*e*et|c**o|*de|")); // expect 2
console.log(countAsterisks("iamprogrammer")); // expect 0
console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l")); // expect 5
