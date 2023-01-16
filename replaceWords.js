{
    /*
    Replace Words

    In English, we have a concept called root, which can be followed by some other word to form another longer word - let's call this word successor. 
    For example, when the root "an" is followed by the successor word "other", we can form a new word "another".
    Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, replace all the successors in the sentence with the root forming it. 
    If a successor can be replaced by more than one root, replace it with the root that has the shortest length.
    Return the sentence after the replacement.
     */
}

var replaceWords = function (dictionary, sentence) {
    // Sort dictionary by length
    // Slice words in the sentence to check if they match the dictionary words. If so, replace the word

    dictionary.sort((a, b) => a.length - b.length);
    // console.log("SORTED DICTIONARY:", dictionary);

    let sentenceArr = sentence.split(" ");
    // console.log("SENTENCE ARRAY:", sentenceArr);

    for (let i = 0; i < dictionary.length; i++) {
        for (let j = 0; j < sentenceArr.length; j++) {
            let length = dictionary[i].length;
            let check = sentenceArr[j].slice(0, length);

            // console.log("DICT WORD:", dictionary[i], "LENGTH:", length, "CHECK:", check);

            if (dictionary[i] === check) {
                sentenceArr[j] = dictionary[i];
            }
        }
        // console.log("I:", i)
    }

    return sentenceArr.join(" ");
};

console.log("Replace Words");
console.log(
    replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery")
); // expect "the cat was rat by the bat"
console.log(replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs")); // expect "a a b c"
console.log(
    replaceWords(
        ["se", "Sal", "she"],
        "Sally sells sea shells by the sea shore"
    )
); // expect "Sal se se she by the se shore."
