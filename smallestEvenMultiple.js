{
    /*
    Smallest Even Multiple

    Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.
     */
}

var smallestEvenMultiple = function (n) {
    let i = n;
    while (!i % 2 === 0 && !i % n === 0) {
        if (i % 2 === 0 && i % n === 0) {
            return i;
        }
        i++;
    }
    return;
};

console.log("Smallest Even Multiple");
console.log(smallestEvenMultiple(5)); // expect 10
console.log(smallestEvenMultiple(6)); // expect 6
