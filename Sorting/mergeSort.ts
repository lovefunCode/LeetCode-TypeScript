// Time complexity : O(nlogn)

function mergeSort(arr: number[]): number[]{
    if(arr.length <= 1){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left: number[], right: number[]):number[]{
    let res: number[] = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            res.push(left.shift()!)
        }else{
            res.push(right.shift()!)
        }
    }
    return [...res, ...left, ...right]
}

const arr = [1, 4, 6,2, 3,5]
console.log(mergeSort(arr))