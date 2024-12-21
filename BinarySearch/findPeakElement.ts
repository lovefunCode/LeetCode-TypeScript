
function findPeakElement(nums: number[]): number|void{
    let left: number = 0
    let mid: number = 0
    let right: number = nums.length-1
    while(left <= right){
        mid = left + Math.floor((right-left)/2)
        if ((nums[mid] > nums[mid - 1]) && ( nums[mid] > nums[mid + 1])) {
            return mid
        }else{
            left = mid + 1; 
        }
    }
}

function findPeakElementArr(nums: number[]): string[]{
    let res: string[] = []
    for(let i = 1; i < nums.length; i++){
        if ((nums[i] > nums[i-1]) && ( nums[i] > nums[i + 1])) {
            res.push(`peak element is ${nums[i]}, index is ${i}`);  
        }
    }
    return res
}

const nums: number[] = [1,2,1,3,5,6,4]
console.log(findPeakElement(nums))

console.log(findPeakElementArr(nums))