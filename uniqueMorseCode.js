{
    /*
    Unique Morse Code Words

    International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

        * 'a' maps to ".-",
        * 'b' maps to "-...",
        * 'c' maps to "-.-.", and so on.
    For convenience, the full table for the 26 letters of the English alphabet is given below:

    [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

    For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
    Return the number of different transformations among all words we have.
     */
}

var uniqueMorseRepresentations = function (words) {
    // Convert each word to morse code
    // push all unique morse strings to an array and return the length of the array

    let morseAlphabet = [
        ".-",
        "-...",
        "-.-.",
        "-..",
        ".",
        "..-.",
        "--.",
        "....",
        "..",
        ".---",
        "-.-",
        ".-..",
        "--",
        "-.",
        "---",
        ".--.",
        "--.-",
        ".-.",
        "...",
        "-",
        "..-",
        "...-",
        ".--",
        "-..-",
        "-.--",
        "--..",
    ];

    let uniqueStrings = [];

    for (let i = 0; i < words.length; i++) {
        let oneWord = words[i];
        let morseString = "";

        // Convert each word to morse code by building a string
        for (let j = 0; j < oneWord.length; j++) {
            let index = oneWord.charCodeAt(j) - 97;
            morseString += morseAlphabet[index];
        }

        // If the string is not in the unique string array, push it
        if (!uniqueStrings.includes(morseString)) {
            uniqueStrings.push(morseString);
        }
    }

    return uniqueStrings.length;
};

console.log("Unique Morse Code Words");
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])); // expect 2
console.log(uniqueMorseRepresentations(["a"])); // expect 1
