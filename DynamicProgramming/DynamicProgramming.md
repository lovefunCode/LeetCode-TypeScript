## Dynamic Programming (DP): 
    DP is a method used to solve problems by breaking them down into smaller subproblems, solving each subproblems, only once, and storing their solutions -- so we don't solve the same problems repeatedly
## Core Ideas:
    1. Memoization(top-down): use recursion, but cache results
    2. Tabulation(bottom-up): use iteration to fill a table, starting from the base
## Steps to solve a DP problems
    1. Define a subproblems
    2. Identify recurrence relation
    3. Base Case
    4. Compute

## Use Cases: 
| Method                  | Description                                 | Pros                                 | Cons                               | Example                    |
|-------------------------|---------------------------------------------|--------------------------------------|------------------------------------|----------------------------|
| Memoization (Top-Down)  | Recursion + Caching (store computed results) | Easy to implement (just modify recursion) | High stack memory (recursive calls) | Fibonacci with memoization |
| Tabulation (Bottom-Up)  | Iterative approach (fill table from small subproblem) | No stack overflow, often faster     | Harder to visualize for some problems | Fibonacci with a loop      |
