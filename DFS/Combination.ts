function combination(arr: (number|string)[]): (number|string)[][]{
    let res: (number|string)[][] = []
   
    function dfs(index: number, currArr: (number|string)[]){
        if(currArr.length <= arr.length){
            res.push([...currArr])
            // return
        }
        for(let i = index; i < arr.length; i++){
            currArr.push(arr[i])
            dfs(i+1, currArr)
            currArr.pop()
        }
    }

    dfs(0, [])

    return res
}

const arr = [1, 2, 3]
console.log(combination(arr))