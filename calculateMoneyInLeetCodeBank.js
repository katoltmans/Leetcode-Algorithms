{
    /*
    Calculate Money in Leetcode Bank
    
    Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.
    He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. 
    On every subsequent Monday, he will put in $1 more than the previous Monday.
    Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.
*/
}

var totalMoney = function (n) {
    // week totals go up by 7's (28, 35, 42...)
    // Use modulo 7 to get remaining days

    let numWeeks = Math.floor(n / 7);
    // console.log("NUM WEEKS:", numWeeks);

    let remainingDays = n % 7;
    // console.log("REMAINING DAYS:", remainingDays);

    let dollarsPerWeek = 0;
    for (let i = 1; i <= numWeeks; i++) {
        dollarsPerWeek += 21 + i * 7;
    }

    // console.log("DOLLARS PER WEEK:", dollarsPerWeek);

    for (let j = 1; j <= remainingDays; j++) {
        dollarsPerWeek += numWeeks + j;
    }

    // console.log("DOLLARS PER WEEK:", dollarsPerWeek);
    return dollarsPerWeek;
};

console.log("Calculate Money in Leetcode Bank");
console.log(totalMoney(4)); // expect 10
console.log(totalMoney(10)); // expect 37
console.log(totalMoney(20)); // expect 96
