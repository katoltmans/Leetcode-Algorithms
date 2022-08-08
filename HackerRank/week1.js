function plusMinus(arr) {
    let positive = 0;
    let zero = 0;
    let negative = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive += 1;
        } else if (arr[i] < 0) {
            negative += 1;
        } else {
            zero += 1;
        }
    }

    positive = positive / arr.length;
    console.log(positive);
    negative = negative / arr.length;
    console.log(negative);
    zero = zero / arr.length;
    console.log(zero);

    return positive, negative, zero;
}

function miniMaxSum(arr) {
    let min = 0;
    let max = 0;

    let sortedArray = arr.sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i < sortedArray.length - 1; i++) {
        min += sortedArray[i];
    }

    for (let j = 1; j < sortedArray.length; j++) {
        max += sortedArray[j];
    }

    let minMax = console.log(min, max);

    return minMax;
}
