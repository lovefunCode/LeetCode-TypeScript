export {}; // Makes this file a module

// return new arr
function rotateReturn(nums: number[], k: number): number[]{
    let sliceNum = nums.length - (k%nums.length)
    console.log(sliceNum)
    console.log(nums.slice(0, sliceNum), nums.slice(sliceNum))
    const arr = (nums.slice(sliceNum)).concat(nums.slice(0, sliceNum))
    return arr
}
// const nums = [1,2,3,4,5,6,7], k = 3
const nums = [-1,-100,3,99], k = 3
console.log(rotate(nums, k))

// Do not return anything, modify nums in-place instead. 
function rotate(nums: number[], k: number): void{
    let sliceNum = nums.length - (k%nums.length)
    nums.unshift(...nums.splice(sliceNum))
    console.log(nums)
}

// remove == splice(startIndex)

let str = ['fruit', 'apple', 'pie', 'banans']
// console.log(str.splice(1))   //[ 'apple', 'pie', 'banans' ]
// console.log(str)   // [ 'fruit' ]


// Do not return anything, modify nums in-place instead. 
function rotate2(nums: number[], k: number): void{
    let sliceNum: number = nums.length - (k%nums.length)
    console.log(sliceNum, nums)
    for(let i = 0; i < sliceNum; i++){
        nums.push(nums[i])
    }
    for(let i = 0; i < sliceNum; i++){
        nums.shift()
    }
    
    console.log(nums)
}

console.log(rotate2([-1,-100,3,99], k))