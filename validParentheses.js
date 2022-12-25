{
    /*
    Valid Parentheses

    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
    An input string is valid if:
        Open brackets must be closed by the same type of brackets.
        Open brackets must be closed in the correct order.
        Every close bracket has a corresponding open bracket of the same type.
     */
}

var isValid = function (s) {
    let forwardStack = [];
    let lastValue;

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "(":
            case "[":
            case "{":
                forwardStack.push(s[i]);
                // console.log("FORWARD STACK:", forwardStack);
                break;
            case ")":
                lastValue = forwardStack[forwardStack.length - 1];
                if (lastValue !== "(") {
                    return false;
                } else {
                    forwardStack.pop();
                    // console.log("FORWARD STACK:", forwardStack);
                }
                break;
            case "]":
                lastValue = forwardStack[forwardStack.length - 1];
                if (lastValue !== "[") {
                    return false;
                } else {
                    forwardStack.pop();
                    // console.log("FORWARD STACK:", forwardStack);
                }
                break;
            case "}":
                lastValue = forwardStack[forwardStack.length - 1];
                if (lastValue !== "{") {
                    return false;
                } else {
                    forwardStack.pop();
                    // console.log("FORWARD STACK:", forwardStack);
                }
                break;
        }
    }
    if (forwardStack.length > 0) {
        return false;
    }

    return true;
};

console.log("Valid Parentheses");
console.log(isValid("()")); // expect true
console.log(isValid("()[]{}")); // expect true
console.log(isValid("(]")); // expect false
