{
    /*
    Find Common Characters

    Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). 
    You may return the answer in any order.
     */
}

var commonChars = function (words) {
    // Sort words array by word length to bring shortest word to start
    const sorted = words.sort((a, b) => a.length - b.length);
    // console.log("SORTED:", sorted);

    //Set first word to compare others to
    let first = sorted[0];
    let length = words.length;
    let result = [];

    // Iterate through letters of first word for comparison
    for (let i = 0; i < first.length; i++) {
        let isMatch = true;

        // Iterate through the rest of the list searching for applicable letter
        for (let j = 1; j < sorted.length; j++) {
            let word = sorted[j];
            let isFound = word.search(first[i]);
            // console.log("LETTER:", first[i], "WORD:", word, "IS FOUND STATUS:", isFound);

            // Once matching letter is found - slice it from the word or set Slice matching letter from word or set isMatch to false
            if (isFound !== -1) {
                let index = word.indexOf(first[i]);
                word = word.slice(0, index) + word.slice(index + 1);
                // console.log("WORD AFTER:", word);
                sorted[j] = word;
            } else {
                isMatch = false;
            }
        }

        // Push matching letter to result if found in all words in the rest of the list (isMatch = true)
        if (isMatch) {
            result.push(first[i]);
        }
        // console.log("RESUT:", result, "SORTED:", sorted);
    }

    // for(let i=0; i< first.length; i++) {
    //     let count = 1;
    //     let isInEveryWord = true;
    //     let letter = first[i];
    //     let letterCount = first.split('').filter(x => x ==
    // letter).length;
    //     // console.log(first[i],"LETTER COUNT:", letterCount);
    //     let minCount = Infinity;

    //     for (let j = 1; j<sorted.length; j++) {
    //         let numLetters = sorted[j].split('').filter(x => x ==
    // letter).length;
    //         // console.log("NUM LETTERS:", numLetters)
    //         if (numLetters === 0 ) {
    //             isInEveryWord = false;
    //             break;

    //         } else if (numLetters === letterCount) {
    //             count++;
    //         }
    //         if (numLetters < minCount) {
    //             minCount = numLetters;
    //         }
    //     }

    //     let resultCount = result.filter(el => el ==
    // letter).length;

    //     // console.log("COUNT:", count, "LENGTH:", length, "RESULT:", result, "RESULT COUNT:", resultCount, "IN WORD?:", isInEveryWord);

    //     if (count === length) {
    //         result.push(letter);
    //         // console.log("RESULT:", result);
    //     } else if (isInEveryWord === true && minCount > resultCount) {
    //         result.push(letter);
    //     }

    // }

    return result;
};

console.log("Find Common Characters");
console.log(commonChars(["bella", "label", "roller"])); // expect ["e","l","l"]
console.log(commonChars(["cool", "lock", "cook"])); // expect ["c","o"]
