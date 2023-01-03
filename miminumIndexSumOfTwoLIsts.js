{
    /*
    Minimum Index Sum of Two Lists

    Given two arrays of strings list1 and list2, find the common strings with the least index sum.
    A common string is a string that appeared in both list1 and list2.
    A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.
    Return all the common strings with the least index sum. Return the answer in any order.
*/
}

var findRestaurant = function (list1, list2) {
    let minIndexSum = Infinity;
    let words = [];

    for (let i = 0; i < list1.length; i++) {
        let indexSum = 0;

        if (list2.includes(list1[i])) {
            indexSum = i + list2.indexOf(list1[i]);
            // console.log("INDEX SUM:", indexSum);
            // console.log(list1[i]);
            if (indexSum === minIndexSum) {
                words.push(list1[i]);
            } else if (indexSum < minIndexSum) {
                words = [list1[i]];
                minIndexSum = indexSum;
            }
        }
    }

    return words;
};

console.log("Minimum Index Sum of Two Lists");
console.log(
    findRestaurant(
        ["Shogun", "Tapioca Express", "Burger King", "KFC"],
        [
            "Piatti",
            "The Grill at Torrey Pines",
            "Hungry Hunter Steakhouse",
            "Shogun",
        ]
    )
); // expect [Shogun]
console.log(
    findRestaurant(
        ["Beau Jo's", "Tapioca Express", "Burger King", "KFC"],
        ["KFC", "Beau Jo's", "Burger King"]
    )
); // expect Beau Jo's
console.log(findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"])); // expect ["happy","sad"]
