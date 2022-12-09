const errorRange = (num) => {
    // Replace the first (and all proceeding instances of that number with 9) - if it is 9, move to the next number on the left and replace all instances
    // Replace the first (and all proceeding instances of that number with 1) - if it is 1, next non one number (and subsequent instances) with zero

    let numStr = num.toString();
    let maxStr = num.toString();
    let minStr = num.toString();
    let maxToReplace = "";
    let minToReplace = "";
    let minIndex = 0;

    // Find the largest number to replace
    for (let i = 0; i < numStr; i++) {
        if (numStr[i] !== "9") {
            maxToReplace += numStr[i];
            break;
        }
    }

    // Find smallest number to replace
    for (let j = 0; j < numStr; j++) {
        if (numStr[j] !== "1") {
            minToReplace += numStr[j];
            minIndex = j;
            break;
        }
    }

    // console.log("MAX TO REPLACE:", maxToReplace, "MIN TO REPLACE:", minToReplace,"MIN INDEX:",minIndex);

    // Replace values in the min and the max
    for (let k = 0; k < numStr.length; k++) {
        if (numStr[k] === maxToReplace) {
            maxStr = maxStr.slice(0, k) + "9" + maxStr.slice(k + 1);
        }

        if (numStr[k] === minToReplace && minIndex === 0) {
            minStr = minStr.slice(0, k) + "1" + minStr.slice(k + 1);
        } else if (numStr[k] === minToReplace && minIndex !== 0) {
            minStr = minStr.slice(0, k) + "0" + minStr.slice(k + 1);
        }
    }

    let max = parseInt(maxStr);
    let min = parseInt(minStr);
    let difference = max - min;

    // console.log("NUM:", num, "MAX:", max, "MIN:", min, "DIFFERENCE:", difference);

    return difference;
};

console.log("Error Digit Range");
console.log(errorRange(909)); // expect 898
console.log(errorRange(111)); // expect 888
console.log(errorRange(9892959922)); // expect 8087808877
console.log(errorRange(12355355)); // expect 82000000
console.log(errorRange(123512)); // expect 820082
