export {}; // Makes this file a module
function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    let startIndex = 0
    for(let i = 1; i < nums.length; i++){
        if(nums[i] != nums[i-1]){
            startIndex++
            nums[startIndex] = nums[i]
        } 
    }
    nums.splice(startIndex, nums.length-startIndex)
    console.log(nums)
    return startIndex
}

const nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))