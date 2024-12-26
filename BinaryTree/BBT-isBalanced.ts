export {}; // Makes this file a module

//  Balanced Binary Tree: a binary tree in which the left and right
// subtrees of every node differ in height by no more than 1

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = (val === undefined ? 0 : val)
        this.left = left
        this.right = right
    }
}

function isBalanced(root: TreeNode | null): boolean {
    function dfs(node: TreeNode | null): number {
        if (!node) {
            return 0
        }
        const leftDepth = dfs(node.left)
        const rightDepth = dfs(node.right)
        if (Math.abs(leftDepth - rightDepth) > 1) {
            return -1
        }
        return 1 + Math.max(leftDepth, rightDepth)
    }
    return dfs(root) !== -1
}
const myTree = new TreeNode(3)
myTree.left = new TreeNode(9)
myTree.right = new TreeNode(20)
myTree.right.left = new TreeNode(15)
myTree.right.right = new TreeNode(7)

console.log(isBalanced(myTree))
