{
    /*
    Maximum Units on a Truck

    You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:
        numberOfBoxes is the number of boxes of type i.
        numberOfUnitsPerBox is the number of units in each box of the type i.
        You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. 
        You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.
    Return the maximum total number of units that can be put on the truck.
     */
}

var maximumUnits = function (boxTypes, truckSize) {
    // Sort box types values by unit size (boxTypes[1])
    // Loop through the types and add items until box number is full

    boxTypes.sort((a, b) => b[1] - a[1]);
    // console.log("BOXTYPES:", boxTypes);
    let count = 0;
    let items = 0;

    // Early escape
    if (boxTypes.length === 0) {
        return 0;
    }

    // Loop to find the items
    for (let i = 0; i < boxTypes.length; i++) {
        if (boxTypes[i][0] < truckSize - count) {
            items += boxTypes[i][0] * boxTypes[i][1];
            count += boxTypes[i][0];
            // console.log("BOXES:", boxTypes[i][0], "ITEMS PER BOX:", boxTypes[i][1], "TOTAL ITEMS:", items)
        } else {
            let addBoxes = truckSize - count;
            items += addBoxes * boxTypes[i][1];
            count += addBoxes;
            // console.log("BOXES (Partial):", addBoxes, "ITEMS PER BOX:", boxTypes[i][1], "TOTAL ITEMS:", items)
            break;
        }
    }
    return items;
};

console.log("Maximum Units on a Truck");
console.log(
    maximumUnits(
        [
            [1, 3],
            [2, 2],
            [3, 1],
        ],
        4
    )
); // expect 8
console.log(
    maximumUnits(
        [
            [5, 10],
            [2, 5],
            [4, 7],
            [3, 9],
        ],
        10
    )
); // expect 91
