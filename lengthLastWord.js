{
    /*
    Length of Last Word

    Given a string s consisting of words and spaces, return the length of the last word in the string.
     */
}

var lengthOfLastWord = function (s) {
    let arrayOfWords = s.trim().split(" ");
    let wordsOnly = [];

    let lastLength = arrayOfWords[arrayOfWords.length - 1].length;

    return lastLength;
};

console.log("Length of Last Word");
console.log(lengthOfLastWord("Hello World")); // expect 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // expect 4
console.log(lengthOfLastWord("luffy is still joyboy")); // expect 6
