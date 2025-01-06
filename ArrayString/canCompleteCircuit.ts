export{}
function canCompleteCircuit(gas: number[], cost: number[]): number{
    let totalTank = 0
    let startIndex = 0
    let currentSurplus = 0
    for(let i = 0; i < gas.length; i++){
        let val = gas[i] - cost[i]
        totalTank += val
        currentSurplus += val  // track surplus for the current journey
        if(currentSurplus < 0){
            startIndex = i + 1
            currentSurplus = 0
        }
    }
    console.log(totalTank, startIndex)
    return totalTank < 0 ? -1 : startIndex
}
const gas = [1,2,3,4,5], cost = [3,4,5,1,2]
console.log(canCompleteCircuit(gas, cost))