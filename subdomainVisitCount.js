{
    /*
    Subdomain Visit Count

    A website domain "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, 
    we have "leetcode.com" and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", 
    we will also visit the parent domains "leetcode.com" and "com" implicitly.

    A count-paired domain is a domain that has one of the two formats "rep d1.d2.d3" or "rep d1.d2" where rep is the number of visits 
    to the domain and d1.d2.d3 is the domain itself.
        For example, "9001 discuss.leetcode.com" is a count-paired domain that indicates that discuss.leetcode.com was visited 9001 times.
    
    Given an array of count-paired domains cpdomains, return an array of the count-paired domains of each subdomain in the input. 
    You may return the answer in any order.
*/
}

function subdomainVisits(cpdomains) {
    let result = [];
    let domainMap = {};

    //Loop through each entire domain to parse number and subdomains
    for (let i = 0; i < cpdomains.length; i++) {
        // Create a new array to separate the number from the subdomains
        let numberArr = cpdomains[i].split(" ");
        // Isolate and convert the number
        let number = Number(numberArr[0]);
        // Create a new array of subdomains
        let domainArr = numberArr[1].split(".");
        // console.log("NUMBER:", number, "DOMAIN ARRAY:", domainArr);

        // Add the entire domain to the domain map with the corresponding number
        let domainStr = domainArr[domainArr.length - 1];
        if (domainMap[domainStr]) {
            domainMap[domainStr] += number;
        } else {
            domainMap[domainStr] = number;
        }

        // Loop through the subdomains in reverse order to check for matching domains - when match is found, add corresponding number to the map
        for (let j = domainArr.length - 2; j >= 0; j--) {
            // Reassign the domain string to each substring and add the corresponding number to the map key when found
            domainStr = domainArr[j] + "." + domainStr;
            if (domainMap[domainStr]) {
                domainMap[domainStr] += number;
            } else {
                domainMap[domainStr] = number;
            }
        }
    }
    for (let key in domainMap) {
        let finalStr = domainMap[key] + " " + key;
        result.push(finalStr);
    }

    // console.log("DOMAIN MAP:", domainMap);
    return result;
}

console.log("Subdomain Visit Count");
console.log(subdomainVisits(["9001 discuss.leetcode.com"]));
console.log(
    subdomainVisits([
        "900 google.mail.com",
        "50 yahoo.com",
        "1 intel.mail.com",
        "5 wiki.org",
    ])
);
console.log();
