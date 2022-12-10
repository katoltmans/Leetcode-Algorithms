{
    /*
    Daily Temperatures

    Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days 
    you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
     */
}

var dailyTemperatures = function (temperatures) {
    // If next day is warmer, push 1
    // If next day is not warmer, loop unil find warmer and reset i

    let result = [];

    // Early return
    if (temperatures.length < 2) {
        return 0;
    }

    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i + 1] > temperatures[i]) {
            result.push(1);
            // console.log("TEMP:", temperatures[i]);
        } else {
            let days = 0;
            for (let j = i + 1; j < temperatures.length; j++) {
                if (temperatures[j] > temperatures[i]) {
                    days = j - i;
                    break;
                }
            }
            if (days > 0) {
                result.push(days);
            } else {
                result.push(0);
            }
        }
    }
    return result;
};

console.log("Daily Temperatures");
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // expect [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30, 60, 90])); // expect [1,1,0]
