export {}
function minSubArrayLen(target: number, nums:number[]): number{
    let minLen = Infinity
    let left:number = 0
  
    let sum = 0
    for(let right = 0; right < nums.length; right++){
        sum += nums[right]
        // shrink the window from left when sum is enough
        // sum >= target because the goal is to find a subarray sum that is at least
        // equal to target, not just greater than it.
        while(sum >= target){
            minLen = Math.min(minLen, right-left+1)
            sum -= nums[left]   //reduce window size
            left++
        }
    }

    return minLen === Infinity ? 0 : minLen  // return 0 if no valid subarray is found
}

const target = 7, nums = [2,3,1,2,4,3]
console.log(minSubArrayLen(target, nums))