export {}; // Makes this file a module
function removeElement(nums: number[], val:number): number{
    let writeIndex: number = 0
    for(let i:number = 0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[writeIndex] = nums[i]
            writeIndex++
        }
    }
    return writeIndex
}
let nums: number[] = [3,2,2,3];
let val:number = 3
console.log(removeElement(nums, val))