function permutation(arr: (string|number)[]): (string|number)[][]{
    let res:(string|number)[][] = []
    let used: boolean[] = new Array(arr.length).fill(false)
    function dfs(currArr: (string|number)[]){
        if(currArr.length === arr.length){
            res.push([...currArr])
            return
        }
        for(let i = 0; i < arr.length; i++){
            if(used[i]) continue
            currArr.push(arr[i])
            used[i] = true
            dfs(currArr)
            currArr.pop()
            used[i] = false
        }
    }
    dfs([])
    return res
}

const nums3 = [1, 2, 3]
console.log(permutation(nums3))

const nums4 = ["A", 'B',  2, 3]
console.log(permutation(nums4))
