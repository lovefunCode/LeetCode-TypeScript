function houseRub(nums: number[]): number{
    if(!nums) return 0
    if(nums.length == 1) return nums[0]
    if(nums.length == 2) return Math.max(nums[0], nums[1])
    let dp: number[] = []
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for(let i = 2; i < nums.length; i++){
        dp[i] = Math.max(nums[i]+ dp[i-2], dp[i-1])
    }
    console.log(dp)
    return dp[dp.length-1]
}

const nums = [2,7,9,3,1]
console.log(houseRub(nums), nums.slice(0, -1), nums.slice(1));