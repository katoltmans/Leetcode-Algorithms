{
    /*
    Maximum Number of Balloons

    Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
    You can use each character in text at most once. Return the maximum number of instances that can be formed.
     */
}

var maxNumberOfBalloons = function (text) {
    // let countArray = ["b", "a", "l", "o", "n"];
    let letterCountArr = [0, 0, 0, 0, 0];

    for (let i = 0; i < text.length; i++) {
        switch (text[i]) {
            case "b":
                letterCountArr[0]++;
                break;
            case "a":
                letterCountArr[1]++;
                break;
            case "l":
                letterCountArr[2]++;
                break;
            case "o":
                letterCountArr[3]++;
                break;
            case "n":
                letterCountArr[4]++;
                break;
        }
    }

    let count = Math.min(...letterCountArr);
    let duplicatesCount = Math.min(
        Math.floor(letterCountArr[2] / 2),
        Math.floor(letterCountArr[3] / 2)
    );

    return Math.min(count, duplicatesCount);
};

console.log("Maximum Number of Balloons");
console.log(maxNumberOfBalloons("nlaebolko")); // expect 1
console.log(maxNumberOfBalloons("loonbalxballpoon")); // expect 2
console.log(maxNumberOfBalloons("leetcode")); // expect 0
