// find the longest path in the tree

function numOfMinutes(employeeCount, headId, managers, informTime){
    const tree = Array.from({length: employeeCount}, ()=>[])
    for(let i = 0; i < employeeCount; i++){
        const manager = managers[i]
        if(manager !== -1){
            tree[manager].push(i)
        }
    }
   console.log(tree)

    function dfs(node){
        let maxTime = 0
        for(const subordinate of tree[node]){
            if(subordinate){
                maxTime = Math.max(maxTime, dfs(subordinate))
            }
        }
        return maxTime + informTime[node]
    }
    return  dfs(headId)
    
}

const employeeCount = 4, headId = 2, managers = [3, 3, -1, 2], informTime = [1, 2, 10, 5]
console.log(numOfMinutes(employeeCount, headId, managers, informTime))

const employeeCount2 = 8, headId2 = 4, managers2 = [5, 5, 6, 6, -1, 4, 4, 6], informTime2 = [0, 0 , 4, 0, 7, 3, 2, 0]
console.log(numOfMinutes(employeeCount2, headId2, managers2, informTime2))