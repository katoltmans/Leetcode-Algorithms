{
    /*
    Watering Plants

    You want to water n plants in your garden with a watering can. The plants are arranged in a row and are labeled from 0 to n - 1 
    from left to right where the ith plant is located at x = i. There is a river at x = -1 that you can refill your watering can at.
    Each plant needs a specific amount of water. You will water the plants in the following way:
        * Water the plants in order from left to right.
        * After watering the current plant, if you do not have enough water to completely water the next plant, return to the river to fully refill the watering can.
        * You cannot refill the watering can early.
    You are initially at the river (i.e., x = -1). It takes one step to move one unit on the x-axis.

    Given a 0-indexed integer array plants of n integers, where plants[i] is the amount of water the ith plant needs, and an integer capacity representing the watering can capacity, return the number of steps needed to water all the plants.
*/
}

var wateringPlants = function (plants, capacity) {
    // Keep track of water capacity
    // When can cannot water plant, reset the capacity and count 2* index +1

    let can = capacity;
    let steps = 0;

    for (let i = 0; i < plants.length; i++) {
        // If can has enough water, decrease can water level and increase step count
        if (plants[i] <= can) {
            can -= plants[i];
            steps++;
        } else {
            // If can does not have capacity to water plant, add 2x the current distance from water to step count and refill watering can
            steps += i * 2;
            can = capacity;
            i--;
        }
    }
    return steps;
};

console.log("Watering Plants");
console.log(wateringPlants([5, 6, 2, 7, 8, 4, 4, 1, 6, 4], 10)); // expect 52
console.log(wateringPlants([7, 7, 7, 7, 7, 7, 7], 8)); // expect 49
