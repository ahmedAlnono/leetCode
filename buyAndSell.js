/**
 * @param {number[]} prices
 * @return {number}
 */

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.


// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
var maxProfit = function(prices) {
    let h = 0;
    for(let i = 0 ; i < prices.length ; i++){
        for(let j = i+1 ; j < prices.length ; j++){
            if(prices[i] < prices[j]){
                if(prices[j] - prices[i] > h){
                    h = prices[j] - prices[i];
                }
            }
        }
    }
    return h;
};
console.log(maxProfit([7,6,4,3,1]))