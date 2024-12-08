function combine(n: number, k: number): number[][]{
    let res: number[][] = []
    dfs(1, [])
    function dfs(index:number, arr:number[]){
        if(arr.length == k){
            res.push([...arr])
            return;
        }
        for(let i = index; i <= n; i++){
            arr.push(i)
            dfs(i+1, arr)
            arr.pop()
        }
    }
    return res
}
const n = 4, k = 2
console.log(combine(n, k))