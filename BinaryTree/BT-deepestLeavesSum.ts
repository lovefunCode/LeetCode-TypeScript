export {}; // Makes this file a module

class TreeNode{
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left: TreeNode|null = null, right: TreeNode|null = null){
        this.val = (val == undefined ? 0 : val)
        this.left = left
        this.right = right
    }
}
function deepestLeavesSum(root: TreeNode|null): number{
    let deepest: number = 0
    let sum: number = 0
    function dfs(node: TreeNode|null, level: number){
        if(!node){
            return null
        }
        if(level == deepest){
            sum += node.val
        }else if(level > deepest){
            deepest = level
            sum = node?.val
        }
        dfs(node.left, level+1)
        dfs(node.right, level+1)
    }
    dfs(root, 0)
    return sum
}

const myTree = new TreeNode(5)
myTree.left = new TreeNode(4)
myTree.right = new TreeNode(8)

myTree.left.left = new TreeNode(11)
myTree.right.left = new TreeNode(13)
myTree.right.right = new TreeNode(4)

myTree.left.left.left = new TreeNode(7)
myTree.left.left.right = new TreeNode(2)
myTree.right.right.left = new TreeNode(5)
myTree.right.right.right = new TreeNode(11)

console.log(deepestLeavesSum(myTree))
