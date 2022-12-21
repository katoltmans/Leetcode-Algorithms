{
    /*
    Palindrome Number

    Given an integer x, return true if x is a palindrome, and false otherwise.
     */
}

var isPalindrome = function (x) {
    let xString = x.toString();
    let newString = "";

    for (let i = xString.length - 1; i >= 0; i--) {
        newString += xString[i];
    }

    if (xString === newString) {
        return true;
    }

    return false;
};

console.log("Palindrome Number");
console.log(isPalindrome(121)); // expect true
console.log(isPalindrome(-121)); // expect false
console.log(isPalindrome(10)); // expect false
