{
    /*
    Add Binary

    Given two binary strings a and b, return their sum as a binary string.
     */
}

var addBinary = function (a, b) {
    // Iterate from the last position of the smallest number
    // If the index positions are both 1, that index position is zero and add 1 to the carry
    // If both numbers in the same index position are zero, but there is a carry, result equals zero and carry becomes 0

    let carry = "0";
    let small = a.length <= b.length ? a : b;
    let large = a.length > b.length ? a : b;
    let result = "";
    let leftover = large.length - small.length;
    let index = large.length - 1;

    // console.log("SMALL:", small, "LARGE:", large, "LEFTOVER:", leftover);

    // Iterate through matching indices
    for (let i = small.length - 1; i >= 0; i--) {
        // console.log();

        if (carry === "0") {
            // console.log("CARRY = 0")
            if (small[i] === "0" && large[index] === "0") {
                result += "0";
            } else if (small[i] === "1" && large[index] === "1") {
                result += "0";
                carry = "1";
            } else {
                result += "1";
            }
        } else {
            // console.log("CARRY = 1")
            if (
                (small[i] === "1" && large[index] === "0") ||
                (small[i] === "0" && large[index] === "1")
            ) {
                result += "0";
                carry = "1";
            } else if (small[i] === "0" && large[index] === "0") {
                result += "1";
                carry = "0";
            } else {
                result += "1";
            }
        }

        // console.log("I:", i, "LARGE[I]:", large[index], "SMALL[I]:", small[i],"RESULT:", result, "CARRY:", carry);
        index--;
    }

    // console.log("--------------")

    if (leftover !== 0) {
        // Iterate through the rest of the large word
        for (let i = leftover - 1; i >= 0; i--) {
            // console.log("I:", i,"LARGE[I]:", large[i], "CARRY:", carry);
            if (carry == "1" && large[i] == "1") {
                result += "0";
                carry = "1";
            } else if (carry == "1" && large[i] == "0") {
                result += "1";
                carry = "0";
            } else {
                result += large[i];
            }
            // console.log("RESULT:", result, "CARRY:", carry);
        }
    }

    if (carry == "1") {
        result += "1";
    }

    return result.split("").reverse().join("");
};

console.log("Add Binary");
console.log(addBinary("11", "1")); // expect "100"
console.log(addBinary("1010", "1011")); // expect "10101"
console.log(addBinary("0", "0")); // expect "0"
console.log(addBinary("10111", "110010")); // expect "1001001"
console.log(addBinary("110010", "100")); // expect "110110"
