export {}
function productExceptSelf(nums: number[]): number[]{
    // let copyNumber = nums.slice()
    let copyNumber = [...nums]
    let res: number[] = []
    for(let i = 0; i < nums.length; i++){
        let currArr = copyNumber.splice(i, 1)
        res[i] = copyNumber.reduce((acc, curr)=>{
            return acc*curr
        }, 1)
        copyNumber = nums.slice()
    }
    return res
}

function productExceptSelf2(nums: number[]): number[]{
    let res: number[] = []
    let start = 1
    for(let i = 0; i < nums.length; i++){
        res.push(start)
        start *= nums[i]
    }
    console.log(res)
    let endStart = 1
    for(let i = nums.length-1; i >= 0; i--){
        res[i] = (endStart*res[i])
        endStart *= nums[i]
    }
    return res
}

const nums = [-1,1,0,-3,3]
const nums2 = [1,2,3,4]
console.log(productExceptSelf2(nums2))