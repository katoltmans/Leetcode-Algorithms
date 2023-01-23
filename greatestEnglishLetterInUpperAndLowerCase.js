{
    /*
    Greatest English Letter in Upper and Lower Case

    Given a string of English letters s, return the greatest English letter which occurs as both a lowercase and uppercase letter in s. 
    The returned letter should be in uppercase. If no such letter exists, return an empty string.
    An English letter b is greater than another letter a if b appears after a in the English alphabet.
     */
}

var greatestLetter = function (s) {
    // Iterate through the string - when uppercase letter is found, check if a lowercase version exists
    // Record the charcode and store the upper case letter
    // Replace with max charcode if greater is found

    let upper = "";
    let charCode = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            if (s.includes(s[i].toLowerCase()) && s.charCodeAt(i) > charCode) {
                upper = s[i];
                charCode = s.charCodeAt(i);
                // console.log("UPPER:", s[i], "CHARCODE:", charCode);
            }
        }
    }

    return upper;
};

console.log("Greatest English Letter in Upper and Lower Case");
console.log(greatestLetter("lEeTcOdE")); // expect "E"
console.log(greatestLetter("arRAzFif")); // expect "R"
console.log(greatestLetter("AbCdEfGhIjK")); // expect ""
console.log(greatestLetter("abcABCqrsQRSXYZxyz")); // expect "Z"
console.log(greatestLetter("")); // expect ""
