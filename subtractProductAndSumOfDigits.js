{
    /*
    Subtract the Product and Sum of Digits of an Integer

    Given an integer number n, return the difference between the product of its digits and the sum of its digits.
     */
}

var subtractProductAndSum = function (n) {
    let numStr = n.toString();
    let product = 1;
    let sum = 0;

    for (let i = 0; i < numStr.length; i++) {
        product *= parseInt(numStr[i]);
        sum += parseInt(numStr[i]);
    }

    return product - sum;
};

console.log("Subtract the Product and Sum of Digits of an Integer");
console.log(subtractProductAndSum(234)); // expect 15
console.log(subtractProductAndSum(4421)); // expect 21
