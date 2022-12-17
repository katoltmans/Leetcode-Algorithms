{
    /*
    Shortest Completing Word

    Given a string licensePlate and an array of strings words, find the shortest completing word in words.
    A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, 
    and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.
    For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are "abccdef", "caaacab", 
    and "cbca".
    Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words.
*/
}

var shortestCompletingWord = function (licensePlate, words) {
    // Sort the words array by word length
    // Create a string of only the letters in the license plate
    // Return the shortest word that has the max amount of letters

    words.sort((a, b) => a.length - b.length);

    let regex = /[a-zA-Z]/i;
    let letterStr = "";
    let maxCount = 0;
    let word = "";

    // Create the license letter only string
    for (let i = 0; i < licensePlate.length; i++) {
        // console.log(plate[i], plate[i].match(regex))
        if (licensePlate[i].match(regex) !== null) {
            letterStr += licensePlate[i].toLowerCase();
        }
    }

    console.log("LETTER STRING:", letterStr);

    // Compare each letter of each word - if the count is larger than the maxCount - replace the word
    for (let j = 0; j < words.length; j++) {
        let count = 0;
        let testStr = letterStr;
        let index = 0;
        for (let k = 0; k < words[j].length; k++) {
            if (testStr.includes(words[j][k])) {
                count++;
                index = testStr.indexOf(words[j][k]);
                testStr = testStr.slice(0, index) + testStr.slice(index + 1);
                console.log("TEST STRING:", testStr);
            }
        }

        // console.log("COUNT:", count, "WORD:", words[j]);

        if (count > maxCount) {
            maxCount = count;
            word = words[j];
        }
    }
    return word;
};

console.log("Shortest Completing Word");
console.log(
    shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])
); // expect steps
console.log(
    shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"])
); // expect pest
