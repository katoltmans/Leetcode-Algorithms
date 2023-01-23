{
    /*
    Truncate Sentence

    A sentence is a list of words that are separated by a single space with no leading or trailing spaces. 
    Each of the words consists of only uppercase and lowercase English letters (no punctuation).
    For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
    You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.
     */
}

var truncateSentence = function (s, k) {
    // split sentence into array of words
    // Loop and concatinate k number of words

    let sArr = s.split(" ");

    // console.log("SARR:", sArr)

    let result = sArr.slice(0, k).join(" ");

    return result;
};

console.log("Truncate Sentence");
console.log(truncateSentence("Hello how are you Contestant", 4)); // expect "Hello how are you"
console.log(truncateSentence("What is the solution to this problem", 4)); // expect "What is the solution"
console.log(truncateSentence("chopper is not a tanuki", 5)); // expect "chopper is not a tanuki"
console.log(truncateSentence("Frozen is a super fun musical to perform in", 0)); // expect ""
console.log(truncateSentence("Frozen is a super fun musical to perform in", 6)); // expect "Frozen is a super fun musical"
