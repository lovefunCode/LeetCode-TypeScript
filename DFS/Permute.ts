function permute(nums: number[]):number[][]{
    let res: number[][] = []

    dfs(0, [])
    function dfs(index: number, currArr: number[]){
        if(index == nums.length){
            res.push([...currArr])
            return
        }
        for(let i = 0; i < nums.length; i++){
            currArr.push(nums[i])
            dfs(i+1, currArr)
            currArr.pop()
        }
    }

    return res

 }

 const nums3 = [1,2,3]
 console.log(permute(nums3))