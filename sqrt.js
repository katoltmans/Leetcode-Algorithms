{
    /*
    Sqrt(x)

    Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
    
     */
}

var mySqrt = function (x) {
    return Math.floor(Math.sqrt(x));
};

console.log("Sqrt(x)");
console.log(mySqrt(4)); // expect 2
console.log(mySqrt(8)); // expect 2
