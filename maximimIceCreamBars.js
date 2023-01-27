{
    /*
    Maximum Ice Cream Bars

    It is a sweltering summer day, and a boy wants to buy some ice cream bars.
    At the store, there are n ice cream bars. You are given an array costs of length n, where costs[i] is the price of the ith ice cream bar in coins. The boy initially has coins coins to spend, and he wants to buy as many ice cream bars as possible. 
    Note: The boy can buy the ice cream bars in any order.
    Return the maximum number of ice cream bars the boy can buy with coins coins.
    You must solve the problem by counting sort.
*/
}

var maxIceCream = function(costs, coins) {
    // Sort the iceCream cost array from least to greatest
    // Subtract each cost from starting value and increment cost
    // Once the cost of an ice cream is greater than the coins, return the count

    let count = 0;

    costs.sort((a,b) => a-b);

    for (let i=0; i<costs.length; i++) {
        // console.log("COINS:", coins, "COST:", costs[i])
        if(coins >= costs[i]) {
            coins -=  costs[i];
            count++;
        } else {
            break;
        }
    }
    return count
};

console.log("Maximum Ice Cream Bars");
console.log(maxIceCream([1,3,2,4,1], 7)); // expect 4
console.log(maxIceCream([10,6,8,7,7,8], 5)); // expect 0
console.log(maxIceCream([1,6,3,1,2,5], 20)); // expect 6
console.log(maxIceCream([], 0)); // expect 0
console.log(maxIceCream([], 5)); // expect 0

