function houseRob(nums: number[]): number{
    if(nums.length <= 1){
        return nums[0]
    }
    if(nums.length == 2){
        return Math.max(nums[0], nums[1])
    }
    let num1 = nums.slice(0, -1)
    let num2 = nums.slice(1)
    function getMax(numsArr: number[]){
        if(numsArr.length <= 1){
            return numsArr[0]
        }
        if(numsArr.length == 2){
            return Math.max(numsArr[0], numsArr[1])
        }
        let dp = [numsArr[0], Math.max(numsArr[0], numsArr[1])]
        console.log(dp)
        for(let i = 2; i < numsArr.length; i++){
            dp[i] = Math.max(numsArr[i]+ dp[i-2], dp[i-1])
            
        }
        console.log(dp)
        return dp[dp.length-1]
    }
    return Math.max(getMax(num1), getMax(num2))
}

const nums = [2,7,9,3,1]
console.log(houseRob(nums));

