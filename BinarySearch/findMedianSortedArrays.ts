function findMedianSortedArrays(num1: number[], num2: number[]): number{
    const arr = new Array()
    console.log(arr)
    let i=0, j = 0
    // 1. merge until one array is exhausted
    while(i < num1.length && j < num2.length){
        if(num1[i] < num2[j]){
            arr.push(num1[i])
            i++
        }else{
            arr.push(num2[j])
            j++
        }
    }
    // drain any remaining elements

    while(i < num1.length){
        arr.push(num1[i++])
    }

    while(j < num2.length){
        arr.push(num2[j++])
    }

    let median = 0
    let len = arr.length
    const mid = Math.floor(len/2)
    // even
    if(len % 2 == 0){
        median = (arr[mid] + arr[mid-1]) /2 
    }else{
        median = arr[mid]
    }

    console.log(arr, i, j, len / 2)
    return median
}

const nums1 = [1, 3, 4], nums2 = [ 2, 5, 6]
console.log(findMedianSortedArrays(nums1, nums2))


function mergeTwoOrderArr(num1: number[], num2: number[]): number[] {
    let i = num1.length - 1
    let j = num2.length - 1
    let right = num1.length + num2.length -1
    let dp = new Array(num1.length + num2.length)
    dp[0] = num1[0]
    while(j >= 0 ){
        if(i >= 0 && num1[i] > num2[j]){
            dp[right] = num1[i]
            i--
        }else{
            dp[right] = num2[j]
            j--
        }
        right-- 
    }
    console.log(dp)
    return dp
}

let mergeArr = mergeTwoOrderArr(nums1, nums2)
console.log(mergeArr)

function findMedian(mergeArr: number[]): number{
    let median = 0
    let len = mergeArr.length
    const mid = Math.floor(len/2)
    // even
    if(len % 2 == 0){
        median = (mergeArr[mid] + mergeArr[mid-1]) /2 
    }else{
        median = mergeArr[mid]
    }
    return median
}

console.log(findMedian(mergeArr))
