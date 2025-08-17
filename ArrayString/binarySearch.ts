function binarySearch(arr: number[], target: number): number{
    let left = 0
    let right = arr.length - 1
    while(left <= right){
        const mid = Math.floor((right + left)/2)
        if(arr[mid] === target){
            return mid
        }else if(arr[mid] < target){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return  -1
}

const arr = [0, 1, 4, 5, 6, 9]
console.log(binarySearch(arr, 6))

