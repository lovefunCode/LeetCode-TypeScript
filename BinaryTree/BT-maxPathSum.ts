class TreeNode{
    val: number
    left: TreeNode|null
    right: TreeNode|null
    constructor(val?: number, left: TreeNode|null = null, right:TreeNode|null = null){
        this.val = (val == undefined ? 0: val)
        this.left = left
        this.right = right
    }
}
//  Time Complexity is O(n)
//  Space Complexity is O(h)

function maxPathSum(root: TreeNode|null): number{
    let sum: number = -Infinity
    function dfs(root: TreeNode|null) : number{
        if(!root){
            return 0
        }
        let left = Math.max(0, dfs(root.left))
        let right = Math.max(0, dfs(root.right))
        // current maximum path sum including both branches and the current node
        let currMax = left + root.val + right

        // upgrade the global maximum sum if the current path is greater
        sum = Math.max(currMax, sum)

        // return the maximum path sum including the current node and one branch(left or right)
        return Math.max(left, right)+ root.val
    }
    dfs(root)
    return sum
}

const myTree = new TreeNode(5)
myTree.left = new TreeNode(4)
myTree.right = new TreeNode(8)

myTree.left.left = new TreeNode(11)
myTree.right.left = new TreeNode(13)
myTree.right.right = new TreeNode(4)

console.log( maxPathSum(myTree))