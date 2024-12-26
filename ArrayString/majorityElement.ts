

function majorityElement(nums: number[]): number{
    let maxNum = Math.ceil(nums.length/2)
    let map: Record<number, number> = {}
    for(let i = 0; i < nums.length; i++){
        let num: number = nums[i]
        if(!map[num]){
            map[num] = 1
        }else{
            map[num]++
        }
        if(map[num] >= maxNum){
            return num
        }
    }
    console.log(map)
    return -1
}
const nums = [2,2,1,1,1,2,2]
console.log(majorityElement(nums))