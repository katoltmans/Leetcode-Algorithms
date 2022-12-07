{
    /*
    Keyboard Row

    Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

    In the American keyboard:
        * the first row consists of the characters "qwertyuiop"
        * the second row consists of the characters "asdfghjkl"
        * the third row consists of the characters "zxcvbnm"
*/
}

var findWords = function (words) {
    // Create a comparison string for each row
    // iterate through each word and see if it matches any of the comparison - if so, push to result array

    let row1 = "qwertyuiop";
    let row2 = "asdfghjkl";
    let row3 = "zxcvbnm";
    result = [];

    // Iterate through each word of the words array
    for (let i = 0; i < words.length; i++) {
        // console.log("WORD:", words[i]);
        let row1Match = true;
        let row2Match = true;
        let row3Match = true;

        // iterate through each letter of the current word, comparing it to each row string
        for (let j = 0; j < words[i].length; j++) {
            // console.log("LETTER:", words[i][j]);
            if (!row1.includes(words[i][j].toLowerCase())) {
                row1Match = false;
            }
            if (!row2.includes(words[i][j].toLowerCase())) {
                row2Match = false;
            }
            if (!row3.includes(words[i][j].toLowerCase())) {
                row3Match = false;
            }
        }

        // If one boolean remains true, all letters from the word were from the same row
        if (row1Match === true || row2Match === true || row3Match === true) {
            result.push(words[i]);
        }
    }

    // console.log("RESULT:", result);
    return result;
};

console.log();
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); // expect ["Alaska", "Dad"]
console.log(findWords(["omk"])); // expect empty array
