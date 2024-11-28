export {}; // Makes this file a module

function maxProductSubarray(nums: number[]): number{
    let preMax:number = nums[0]
    let preMin:number = nums[0]
    let res:number = nums[0]
    for(let i = 1; i < nums.length; i++){
        let currMax = Math.max(nums[i], nums[i]*preMax, nums[i]*preMin)
        let currMin = Math.min(nums[i], nums[i]*preMax, nums[i]*preMin)
        preMax = currMax
        preMin = currMin
        res = Math.max(res, preMax)
    }
    return res
}
const nums: number[] = [2,3,-2,4]
console.log(maxProductSubarray(nums))
