function permute(nums: (number|string)[]):(number|string)[][]{
    let res: (number|string)[][] = []
    nums.sort()
    let used = new Array(nums.length).fill(false)

    dfs([])
    function dfs(currArr: (number|string)[]){
        if(currArr.length == nums.length){
            res.push([...currArr])
            return
        }
        for(let i = 0; i < nums.length; i++){
            if(used[i]) continue  /// skip used element
            used[i] = true
            currArr.push(nums[i])
            dfs(currArr)
            currArr.pop()
            used[i] = false
        }
    }

    return res

 }

 const nums2 = [1, 2, 3]
 console.log('permute(nums2)---', permute(nums2))


 // No Duplicate Element Permutation
function permutation(arr: (string|number)[]) : (string|number)[][]{
    let res: (string|number)[][] = []
    function dfs(currArr: (string|number)[]){
        if(currArr.length === arr.length){
            res.push([...currArr])
            return
        }
        let leftArr = arr.filter((item)=> !currArr.includes(item))
        console.log('leftArr', leftArr)
        for(let i = 0; i < leftArr.length; i++){
            currArr.push(leftArr[i])
            dfs(currArr)
            currArr.pop();
        }
    }
    dfs([])
    return res
}



 const nums3 = [1, 2, 3]
//  console.log(permutation(nums3))

 // With Duplicate Element in the Array
 function permutation2(arr: (string|number)[]): (string|number)[][]{
    let res:(string|number)[][] = []
    arr.sort()
    let used = new Array(arr.length).fill(false)
    function dfs(currArr: (string|number)[]){
        if(currArr.length == arr.length){
            res.push([...currArr])
            return
        }
        for(let i = 0; i < arr.length; i++){
            // used[i-1] not used[i] , check the previous identical element has already been used
            // in the recursion level
            if(!used[i-1] && i > 0 && arr[i] === arr[i-1]) continue  // fix duplicate check
            if(used[i]) continue  // skip already used element
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


 const nums4 = [1, 2, 1]
 console.log(permutation2(nums4))