/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let tempWealth = 0;
    let wealth = 0;
    console.log(JSON.stringify(accounts));
    for (let customer of accounts) {
        console.log(JSON.stringify(customer));
        tempWealth = 0;
        for (let bank of customer) {
            tempWealth+=bank;
        }
        if (tempWealth > wealth) {
            wealth = tempWealth;
        }
    }
    return wealth;
};
