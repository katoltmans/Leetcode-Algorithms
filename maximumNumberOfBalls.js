{
    /*
    Maximum Number of Balls in a Box
     */
}

var countBalls = function (lowLimit, highLimit) {
    // Add the digits of each integer and create a key with that value or add to the key
    // Return the highest value

    let boxMap = {};

    // Save each individual number as a key
    for (let i = lowLimit; i <= highLimit; i++) {
        let string = i.toString().split("");
        // console.log(sum);
        sum = 0;

        // store the number of balls in the box as a value
        for (let j = 0; j < string.length; j++) {
            sum += parseInt(string[j]);
        }

        if (!!boxMap[sum]) {
            boxMap[sum]++;
        } else {
            boxMap[sum] = 1;
        }
    }
    // console.log("BOX MAP:", boxMap);

    let max = 0;

    // Iterate through the box numbers (keys) to find the highest value
    for (let key in boxMap) {
        if (boxMap[key] > max) {
            max = boxMap[key];
        }
    }
    return max;
};

console.log("Maximum Number of Balls in a Box");
console.log(countBalls(1, 10)); // expect 2
console.log(countBalls(5, 15)); // expect 2
console.log(countBalls(19, 28)); // expect 2
