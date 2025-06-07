function insertSort(arr: number[]){
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i+1; j >=0; j--){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
}

// Time Complexity: O(N*N)
const array = [3,2,4,1,6,5, 8, 0]
console.log(insertSort(array), array)