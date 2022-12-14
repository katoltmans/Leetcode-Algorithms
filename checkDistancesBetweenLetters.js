{
    /*
    Check Distances Between Same Letters (2399)

    You are given a 0-indexed string s consisting of only lowercase English letters, where each letter in s appears exactly twice. 
    You are also given a 0-indexed integer array distance of length 26.

    Each letter in the alphabet is numbered from 0 to 25 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, ... , 'z' -> 25).

    In a well-spaced string, the number of letters between the two occurrences of the ith letter is distance[i]. 
    If the ith letter does not appear in s, then distance[i] can be ignored.

    Return true if s is a well-spaced string, otherwise return false.
     */
}

var checkDistances = function (s, distance) {
    // Slice current letter off the string
    // The index of the new character will be the distance between the two letters
    // Compare that index with the value in the distance array to see if they are equal

    let isWellSpaced = true;

    for (let i = 0; i < s.length - 1; i++) {
        let letter = s[i];

        // Slice the letter off the string to find the index of the second instance
        let compare = s.slice(i + 1);

        // The index equals the distance between both instances of the letter in the string
        let index = compare.indexOf(letter);

        // Compare index (distance between letters in the string) to value of location in the distance array
        let disIndex = s.charCodeAt(i) - 97;
        if (distance[disIndex] !== index && index !== -1) {
            isWellSpaced = false;
            break;
        }
    }
    return isWellSpaced;
};

console.log("Check Distances Between Same Letters");
console.log(
    checkDistances(
        "abaccb",
        [
            1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0,
        ]
    )
); // expect true
console.log(
    checkDistances(
        "aa",
        [
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0,
        ]
    )
); // expect false
