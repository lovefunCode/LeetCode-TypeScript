function threeSum(nums: number[], target: number):number[][]{
    let res: number[][] = []
    nums.sort((a, b)=> a-b)
    console.log()
    let left = 0, right = nums.length-1
    while(left < right){
        let secLeft = left+1
        while(secLeft < right){
            let sum = nums[left] + nums[secLeft] + nums[right]
            if( sum == target){
                res.push([nums[left],nums[secLeft],  nums[right]])
                while(nums[secLeft] == nums[secLeft-1] && secLeft < right) secLeft++
                while(nums[right] == nums[right+1] && secLeft < right) right--
                secLeft++
                right--
            }else if(sum > target){
                right--
            }else if(sum < target){
                secLeft++
            }
        }
        left++
    }
    return res
}

const nums = [-1,0,1,2,-1,-4], target = 0
console.log(threeSum(nums, target))
