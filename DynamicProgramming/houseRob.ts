function rob(nums: number[]):number{
    if(nums.length == 1){
        return nums[0]
    }
    if(nums.length == 2){
        return Math.max(nums[0], nums[1])
    }
    let dp = []
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for(let i = 2; i < nums.length; i++){
        dp[i] = Math.max(dp[i-2]+nums[i], dp[i-1])
    }
    return dp[dp.length-1]
}
const nums:number[] = [1,2,3,1]
const nums2: number[] = [2,7,9,3,1]
console.log(rob(nums))
console.log(rob(nums2))