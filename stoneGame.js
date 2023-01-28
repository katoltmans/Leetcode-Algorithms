{
    /*
    Stone Game  

    Alice and Bob play a game with piles of stones. There are an even number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].
    The objective of the game is to end with the most stones. The total number of stones across all the piles is odd, so there are no ties.
    Alice and Bob take turns, with Alice starting first. Each turn, a player takes the entire pile of stones either from the beginning or from the end of the row. 
    This continues until there are no more piles left, at which point the person with the most stones wins.
    Assuming Alice and Bob play optimally, return true if Alice wins the game, or false if Bob wins.
*/
}

var stoneGame = function(piles) {
    // Since there are an even amount of turns and all numbers are seen...
    // Alice will always be able to choose the best option
    return true;

    // // Keep running count of alice and bob's scores
    // // Use boolean to determine whose turn it is
    // // Check front and back number - whichever is larger, shift or pop the number and add to the score
    // // Compare Alice and Bob's scores - if Alice has highest score, return true

    // let aliceScore = 0;
    // let bobScore = 0;
    // let aliceTurn = true;

    // while (piles.length > 0) {
    //     if (piles[0] > piles[piles.length-1]) {
    //         aliceTurn === true ? aliceScore += piles.shift() : bobScore += piles.shift();
    //     } else {
    //         aliceTurn === true ? aliceScore += piles.pop() : bobScore += piles.pop();
    //     }

    //     aliceTurn === true ? aliceTurn = false : aliceTurn = true;
    // }
    // return aliceScore > bobScore ? true : false;
};

console.log("Stone Game");
console.log(stoneGame([5,3,4,5])); // expect true
console.log(stoneGame([3,7,2,3])); // expect true
