class TreeNode {
    constructor(val, left, right) {
        this.val = (val == undefined ? 0 : val);
        this.left = (left == undefined ? null : left);
        this.right = (right == undefined ? null : right);
    }
}
function pathSum(root, targetSum) {
    let res = [];
    dfs(root, [], targetSum);
    function dfs(currNode, arr, leftVal) {
        if (currNode == null) {
            return [];
        }
        arr.push(currNode.val);
        if (!currNode.left && !currNode.right && leftVal == currNode.val) {
            res.push([...arr]);
        }
        dfs(currNode.left, arr, leftVal - currNode.val);
        dfs(currNode.right, arr, leftVal - currNode.val);
        arr.pop();
    }
    return res;
}
const myTree = new TreeNode(5);
myTree.left = new TreeNode(4);
myTree.right = new TreeNode(8);
myTree.left.left = new TreeNode(11);
myTree.right.left = new TreeNode(13);
myTree.right.right = new TreeNode(4);
myTree.left.left.left = new TreeNode(7);
myTree.left.left.right = new TreeNode(2);
myTree.right.right.left = new TreeNode(5);
myTree.right.right.right = new TreeNode(11);
console.log(pathSum(myTree, 22));
// export {};
