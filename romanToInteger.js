{
    /*
    Roman to Integer

    Given a roman numeral, convert it to an integer.
    (s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M'))
     */
}

var romanToInt = function (s) {
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "I" && (s[i + 1] == "X" || s[i + 1] == "V")) {
            sum--;
        } else if (s[i] == "I") {
            sum++;
        }
        if (s[i] == "V") {
            sum += 5;
        }
        if (s[i] == "X" && (s[i + 1] == "L" || s[i + 1] == "C")) {
            sum -= 10;
        } else if (s[i] == "X") {
            sum += 10;
        }
        if (s[i] == "L") {
            sum += 50;
        }
        if (s[i] == "C" && (s[i + 1] == "D" || s[i + 1] == "M")) {
            sum -= 100;
        } else if (s[i] == "C") {
            sum += 100;
        }
        if (s[i] == "D") {
            sum += 500;
        }
        if (s[i] == "M") {
            sum += 1000;
        }
    }
    return sum;
};

console.log("Roman to Integer");
console.log(romanToInt("III")); // expect 3
console.log(romanToInt("LVIII")); // expect 58
console.log(romanToInt("MCMXCIV")); // expect 1994
