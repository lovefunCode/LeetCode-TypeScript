function selectionSort(arr: number[]){
    for(let i = 0; i < arr.length; i++){
        let miniNumb = i
        for(let j = i+1; j < arr.length; j++){
            if(arr[miniNumb] > arr[j]){
                miniNumb = j
            }
        }
        [arr[i], arr[miniNumb]] = [arr[miniNumb], arr[i]]
    }
}

// Time Complexity: O(N*N)
const array = [3,2,4,1,6,5, 8, 0]
console.log(selectionSort(array), array)