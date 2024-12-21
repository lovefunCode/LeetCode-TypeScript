"use strict";
function combinationSum(candidates, target) {
    let res = [];
    candidates.sort((a, b) => a - b);
    dfs(0, [], target);
    function dfs(index, currArr, leftVal) {
        if (leftVal == 0) {
            res.push([...currArr]);
            return;
        }
        for (let i = index; i < candidates.length; i++) {
            if (leftVal < candidates[i]) {
                break;
            }
            currArr.push(candidates[i]);
            dfs(i, currArr, leftVal - candidates[i]);
            currArr.pop();
        }
    }
    return res;
}
const candidates = [2, 3, 6, 7], target = 7;
console.log(combinationSum(candidates, target));