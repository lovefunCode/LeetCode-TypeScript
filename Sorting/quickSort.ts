function quickSort(arr: number[]): number[]{
    if(arr.length <= 1){
        return arr
    }
    let leftArr:number[] =  []
    let rightArr:number[] = []
    let pivot = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > pivot){
            rightArr.push(arr[i])
        }else{
            leftArr.push(arr[i])
        }
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

const arr:number[] = [1,4, 5, 0, 9, 3]
console.log(quickSort(arr))