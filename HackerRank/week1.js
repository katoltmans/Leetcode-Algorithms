{
    /* 
    Plus Minus - 
    Given an array of integers, calculate the ratios of its elements that are 
    positive, negative, and zero. Print the decimal value of each fraction on 
    a new line with  places after the decimal.
    */
}

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
    console.log(positive.toFixed(6));
    negative = negative / arr.length;
    console.log(negative.toFixed(6));
    zero = zero / arr.length;
    console.log(zero.toFixed(6));

    return positive, negative, zero;
}

plusMinus([-4, 3, -9, 0, 4, 1]);

{
    /* 
    Min-Max Sum - 

*/
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

{
    /*  */
}

function timeConversion(s) {
    let hour = s.slice(0, 1);
    console.log(hour);
}

timeConversion("07:05:45PM");

{
    /*  */
}

{
    /* Your task is to write a program that creates or splits Camel Case variable, method, and class names.
    Sample Input

S;M;plasticCup()

C;V;mobile phone

C;C;coffee machine

S;C;LargeSoftwareBook

C;M;white sheet of paper

S;V;pictureFrame

Sample Output

plastic cup

mobilePhone

CoffeeMachine

large software book

whiteSheetOfPaper()

picture frame
    
    */
}

function processData(inputBlock) {
    //console.log("'"+inputBlock.replace(/\n/g, '\\n').replace(/\r/g, '\\r')+"'");
    //let cleanInput = inputBlock.replace(/\r/g, '');
    let inputArray = inputBlock.split("\r\n");
    let outputArray = [];

    for (let input of inputArray) {
        let newString = "";
        if (input[0] === "S") {
            if (input[2] === "M") {
                for (let i = 4; i < input.length - 2; i++) {
                    if (input[i] === input[i].toUpperCase()) {
                        newString += " " + input[i].toLowerCase();
                    } else {
                        newString += input[i];
                    }
                    if (input[i] === "(") {
                        return newString;
                    }
                }
                // console.log(newString);
            }
            if (input[2] === "C") {
                newString += input[4].toLowerCase();
                for (let i = 5; i < input.length; i++) {
                    if (input[i] === input[i].toUpperCase() && i) {
                        newString += " " + input[i].toLowerCase();
                    } else {
                        newString += input[i];
                    }
                }
                // console.log(newString);
            }
            if (input[2] === "V") {
                for (let i = 4; i < input.length; i++) {
                    if (input[i] === input[i].toUpperCase() && i) {
                        newString += " " + input[i].toLowerCase();
                    } else {
                        newString += input[i];
                    }
                }
                // console.log(newString);
            }
        }
        if (input[0] === "C") {
            if (input[2] === "C") {
                newString += input[4].toUpperCase();
                for (let i = 5; i < input.length; i++) {
                    if (input[i] === " ") {
                        i++;
                        newString += input[i].toUpperCase();
                    } else {
                        newString += input[i];
                    }
                }
                // console.log(newString);
            }
            if (input[2] === "V" || input[2] === "M") {
                for (let i = 4; i < input.length; i++) {
                    if (input[i] === " ") {
                        i++;
                        newString += input[i].toUpperCase();
                    } else {
                        newString += input[i];
                    }
                }
                if (input[2] === "M") {
                    newString += "()";
                }
                // console.log(newString);
            }
        }

        outputArray.push(newString);
    }
    let finalString = outputArray.join("\n");
    console.log(finalString);
    return finalString;
}

{
    /*  */
}

{
    /* Given an array of integers and a positive integer k, determine the number of (i,j) pairs where i<j and ar[i] + ar[j] is divisible by k.

Example
ar = [1,2,3,4,5,6]
k = 5
n = 6 (length of array)

Three pairs meet the criteria: [1,4], [2,3] and [4,6]. */
}

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                count++;
            }
        }
    }
    return count;
}

console.log(divisibleSumPairs(6, 3, [1, 2, 3, 4, 5, 6]));

{
    /* There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

Example
strings = ['ab', 'ab', 'abc']
queries = ['ab', 'abc', 'bc']

There are 2 instances of 'ab', 1 of 'abc' and 0 of 'bc'. For each query, add an element to the return array,
results = [2,1,0]. */
}

function matchingStrings(strings, queries) {
    // Write your code here
    let results = [];

    for (let i = 0; i < queries.length; i++) {
        let count = 0;
        for (let j = 0; j < strings.length; j++) {
            if (queries[i] == strings[j]) {
                count++;
            }
        }
        results.push(count);
    }
    return results;
}

console.log(
    matchingStrings(
        [
            "abcde",
            "sdaklfj",
            "asdjf",
            "na",
            "basdn",
            "sdaklfj",
            "asdjf",
            "na",
            "asdjf",
            "na",
            "basdn",
            "sdaklfj",
            "asdjf",
        ],
        ["abcde", "sdaklfj", "asdjf", "na", "basdn"]
    )
);
