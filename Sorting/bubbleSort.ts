function bubbleSort(arr: number[]){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
}

// Time Complexity: O(N*N)
const array = [3,2,4,1,6,5, 8, 0]
console.log(bubbleSort(array), array)