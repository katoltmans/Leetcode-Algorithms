{
    /*
    Build an Array With Stack Operations

    You are given an integer array target and an integer n.
    You have an empty stack with the two following operations:
        "Push": pushes an integer to the top of the stack.
        "Pop": removes the integer on the top of the stack.
    You also have a stream of the integers in the range [1, n].
    Use the two stack operations to make the numbers in the stack (from the bottom to the top) equal to target. You should follow the following rules:
        If the stream of the integers is not empty, pick the next integer from the stream and push it to the top of the stack.
        If the stack is not empty, pop the integer at the top of the stack.
        If, at any moment, the elements in the stack (from the bottom to the top) are equal to target, do not read new integers from the stream and do not do more operations on the stack.
    Return the stack operations needed to build target following the mentioned rules. If there are multiple valid answers, return any of them.
     */
}

var buildArray = function (target, n) {
    // Push numbers up to n
    // Compare the indexes of the s array and target array. If a pushed number does not exist in the target array, pop it.
    // Push the operations to an operation array

    let s = [];
    let output = [];

    for (let i = 1; i <= n; i++) {
        s.push(i);
        output.push("Push");
        let index = s.indexOf(i);
        // console.log("S:", s, "OUTPUT:", output, "INDEX:", index);

        if (s[index] !== target[index]) {
            s.pop();
            output.push("Pop");
            // console.log("S:", s, "OUTPUT:", output);
        }

        if (s.length === target.length) {
            break;
        }
    }

    return output;
};

console.log("Build an Array With Stack Operations");
console.log(buildArray([1, 3], 3)); // expect ["Push","Push","Pop","Push"]
console.log(buildArray([1, 2, 3], 3)); // expect ["Push","Push","Push"]
console.log(buildArray([1, 2], 4)); // expect ["Push","Push"]
console.log(buildArray([], 10)); // expect ["Push","Pop"]
