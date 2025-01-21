function twoSum(numbers: number[], target: number): number[]{
    let left = 0, right = numbers.length-1
    while(left < right){
        let sum = numbers[left] + numbers[right]
        if(sum == target){
            return [left+1, right+1]
        }else if(sum > target){
            right--
        }else if(sum < target){
            left++
        }
    }

    return []
}

const numbers = [2,7,11,15], target = 9
console.log(twoSum(numbers, target))