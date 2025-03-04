function subsets(nums: number[]): number[][]{
    let res: number[][] = []

    dfs(0, [])
    function dfs(index: number, currArr:number[]){
        if(currArr.length <= nums.length){
            res.push([...currArr])
        }
        for(let i = index; i < nums.length; i++){
            currArr.push(nums[i])
            dfs(i+1, currArr)
            currArr.pop()
        }
    }
    return res
}

const nums = [1,2,3]
console.log(subsets(nums))

const nums2 = [1]
console.log(subsets(nums2))