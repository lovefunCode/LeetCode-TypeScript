"use strict";
function permute(nums) {
    let res = [];
    dfs(nums, []);
    function dfs(originalArr, currArr) {
        if (currArr.length == nums.length) {
            res.push([...currArr]);
            return;
        }
        const filerArr = originalArr.filter(element => {
            return !currArr.includes(element);
        });
        for (let i = 0; i < originalArr.length; i++) {
            let restArr = originalArr.filter((n, index) => index != i);
            // let restArr = originalArr.filter(ele=> !currArr.includes(ele))
            currArr.push(originalArr[i]);
            dfs(restArr, currArr);
            currArr.pop();
        }
    }
    return res;
}
const nums3 = [1, 2, 3];
console.log(permute(nums3));
