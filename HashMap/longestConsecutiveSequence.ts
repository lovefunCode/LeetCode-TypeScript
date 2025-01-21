export {}
function longestConsecutive(nums: number[]): number{
    let mySet: Set<number> = new Set(nums)  // explicitly typed as Set<number>
    let streak = 1
    for(let val of mySet){
        console.log('val--', val)
        if(mySet.has(val + 1)){
            continue
        }
        let number = 1
        while(mySet.has(val - 1)){
            number++
            val--
        }
        streak = Math.max(streak, number)
    }
    return streak
}

const nums = [100,4,200,1,3,2]
const nums2 = [0,3,7,2,5,8,4,6,0,1]
console.log(longestConsecutive(nums2))