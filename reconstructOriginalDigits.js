{
    /*
    Reconstruct Original Digits from English

    Given a string s containing an out-of-order English representation of digits 0-9, return the digits in ascending order.
*/
}

var originalDigits = function (s) {
    // Create an object to keep track of a count of the corresponding numbers to words found
    // Look only for characters with unique letters (2, 4, 6, 8, 10)
    // Go through a second round and find the most unique characters of the remaining numbers

    let numsCount = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
    };

    // Add a count to the corresponding number when finding the following letters
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "z") {
            numsCount[0]++;
        } else if (s[i] === "w") {
            numsCount[2]++;
        } else if (s[i] === "u") {
            numsCount[4]++;
        } else if (s[i] === "x") {
            numsCount[6]++;
        } else if (s[i] === "g") {
            numsCount[8]++;
        } else if (s[i] === "o") {
            numsCount[1]++;
        } else if (s[i] === "h") {
            numsCount[3]++;
        } else if (s[i] === "f") {
            numsCount[5]++;
        } else if (s[i] === "s") {
            numsCount[7]++;
        } else if (s[i] === "i") {
            numsCount[9]++;
        }
    }
    // console.log("NUMS COUNT:", numsCount);

    // Unique letter counts will remain as is - calculate the counts of numbers with nonunique letters by subtracting the unique and previous letter counts
    numsCount[1] -= numsCount[0] + numsCount[2] + numsCount[4];
    numsCount[3] -= numsCount[8];
    numsCount[5] -= numsCount[4];
    numsCount[7] -= numsCount[6];
    numsCount[9] -= numsCount[6] + numsCount[8] + numsCount[5];

    // console.log("NEW NUMS COUNT:", numsCount);

    // Create the string of integers by concatinating the key to it the number of times of the value
    let result = "";

    for (let j = 0; j < 10; j++) {
        while (numsCount[j] !== 0) {
            result += j;
            numsCount[j]--;
            // console.log("RESULT:", result);
        }
    }

    return result;
};

console.log();
console.log(originalDigits("owoztneoer")); // expect 012
console.log(originalDigits("zerozero")); // expect 0
console.log(originalDigits("zeroonetwothreefourfivesixseveneightnine")); // expect 0123456789

// FIRST TRY BELOW - Prior code passed 14/24 cases but was not efficient enough

// var originalDigits = function(s) {

//     let numArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     let result = [];

//     while (s.length !==0) {
//         for (let i=0; i< numArray.length; i++) {
//             let temp = s;
//             let check = "";
//             let word = numArray[i]
//             for (let j=0; j<word.length; j++) {
//                 let letter = word[j]
//                 if (s.includes(letter)) {
//                     check += letter;
//                     let index = s.indexOf(letter);
//                     s = s.slice(0,index) + s.slice(index +1);
//                     // console.log("NEW S:", s);
//                 } else {
//                     break;
//                 }
//             }

//             // console.log("WORD", word, "CHECK:", check);

//             if (check === word) {
//                 result.push(i);
//             } else {
//                 s = temp;
//             }
//         }
//     }
//     result.sort((a,b) => a-b);
//     return result.toString().split(",").join("");
// };
