{
    /*
    Longest Word in Dictionary

    Given an array of strings words representing an English Dictionary, return the longest word in words that can be built one character at a time by other words in words.
    If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return the empty string.
    Note that the word should be built from left to right with each additional character being added to the end of a previous word. 
     */
}

var longestWord = function (words) {
    let map = new Map();
    let longest = "";
    longestLength = 0;

    // Sort all words by length starting with shortest going to longest.
    words.sort((a, b) => a.length - b.length);

    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];
        // Only proceed from a single character words or the current word minus the last character matches a key in the map
        // For example let's say you started with "y" and the next word is "yo". This takes "yo" turns it to "y"
        // and checks if that's in the map's set of keys. It is so we proceed. But if the word is "zo" and we don't
        // have a "z" in the map then we skip it. Since all the words are sorted by length we won't
        // run into a situation later where we would have to reevaluate prior words.
        if (
            currentWord.length == 1 ||
            map.get(currentWord.slice(0, currentWord.length - 1))
        ) {
            // !0 = true, !1 = false. So as soon as our length is > 1 this is always false.
            // For the first time only set the longestLength and longest word.
            //if(!longestLength){
            if (longestLength === 0) {
                longestLength = currentWord.length;
                longest = currentWord;
            }

            // For every other iteration do the following
            else {
                // if the prior longest word length is less than the current word OR
                // if the currentWord is lexicographically less than the longest word (a is less than b, etc.),
                // replace the longest word with the current word.
                if (
                    longest.length < currentWord.length ||
                    currentWord < longest
                ) {
                    longest = currentWord;
                }
            }

            // Add the current word to the dictionary. Give it a value of 1 because we don't care about the value
            // We really just want a unique set of words which a map gives us by overwriting keys that are the same.
            // Basically there are no duplicates in the map keys and that's all we care about.
            map.set(currentWord, 1);
        }
    }
    return longest;
};

// Solved with help from James Oltmans

console.log("Longest Word in Dictionary");
console.log(longestWord(["w", "wo", "wor", "worl", "world"])); // expect "world"
console.log(
    longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"])
); // expect "apple"
