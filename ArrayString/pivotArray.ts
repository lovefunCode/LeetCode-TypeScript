export {}
// quick sort
function pivotArray(nums: number[], pivot: number): number[]{
    let less: number[] = []
    let p: number[] = []
    let large: number[] = []
    for(let i = 0, len=nums.length; i < len; i++){
        if(nums[i] < pivot){
            less.push(nums[i])
        }else if(nums[i] > pivot){
            large.push(nums[i])
        }else{
            p.push(nums[i])
        }
    }
    return [...less, ...p, ...large]
}
const nums = [9,12,5,10,14,3,10], pivot = 10
console.log(pivotArray(nums, pivot))

// 
function pivotArray2(nums: number[], pivot: number): number[]{
    let res: number[] = []
    let left = 0, right = nums.length-1
    for(const num of nums){
        if(num < pivot){
            res.push(num)
            left++
        }
    }
    for(let i = nums.length-1; i >= 0; i--){
        if(nums[i] > pivot){
            res[right] = (nums[i])
            right--
        }
    }
    while(left <= right){
        res[left] = pivot
        left++
    }

    return res
}
const nums2 = [-3,4,3,2], pivot2 = 2
console.log(pivotArray2(nums2, pivot2))
