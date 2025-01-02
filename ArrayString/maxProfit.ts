function maxProfit(prices: number[]): number{
    let buyMin: number = prices[0]
    let maxProfit: number = 0
    for(let i = 1; i < prices.length; i++){
        buyMin = Math.min(buyMin, prices[i])  // get the minimun number
        // compare the maxProfit to the current prices - buymin
        maxProfit = Math.max(maxProfit, prices[i]-buyMin)
    }
    return maxProfit
} 

const prices = [7,1,5,3,6,4]
const prices2 = [7,6,4,3,1]
console.log(maxProfit(prices))