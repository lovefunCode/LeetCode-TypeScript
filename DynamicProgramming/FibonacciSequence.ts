// 1.  memoization -> top down
function fib(n: number, memo:{[key: number]: number}={}){
    if(n <= 1) return n
    if(n in memo){
        return memo[n]
    }
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
}

console.log(fib(6))


// 2. tabulation -> bottom up
function fib2(n: number): number{
    if(n <= 1) return n
    let dp = [0, 1]
    for(let i = 2; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
}

console.log(fib2(6))