{
    /*
    Container With Most Water

    You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
    Find two lines that together with the x-axis form a container, such that the container contains the most water.
    Return the maximum amount of water a container can store.
     */
}

var maxArea = function (height) {
    let max = 0;
    let area = 0;
    let left = 0;
    let right = height.length - 1;
    let distance = height.length - 1;

    for (let i = 0; i < height.length; i++) {
        if (height[left] > height[right]) {
            // console.log("LEFT:", left, "RIGHT:", right, "move right");
            area = height[right] * distance;
            // console.log("RIGHT:", right, "DISTANCE:", distance, "AREA:", area);
            if (area > max) {
                max = area;
            }

            right--;
            distance--;
        } else {
            // console.log("LEFT:", left, "RIGHT:", right,"move left");
            area = height[left] * distance;
            // console.log("LEFT:", left, "DISTANCE:", distance, "AREA:", area);
            if (area > max) {
                max = area;
            }
            left++;
            distance--;
        }
    }

    return max;
};

// var maxArea = function(height) {
//     let maxWater = 0
//     let distance = height.length-1

//     let left = 0
//     let right = height.length-1

//     while(left < right){
//          if(height[left] < height[right]){
//             maxWater = Math.max(maxWater, height[left]*distance)
//             distance--
//             left++
//         }else{
//             maxWater = Math.max(maxWater, height[right]*distance)
//             distance--
//             right--
//         }
//     }
//     return maxWater
// };

console.log("Container With Most Water");
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // expect 49
console.log(maxArea([1, 1])); // expect 1
