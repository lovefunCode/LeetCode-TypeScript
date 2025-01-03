class TreeNode {
    left: TreeNode | null
    val: number
    right: TreeNode | null
    constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.left = left
        this.right = right
        this.val = (val == undefined ? 0 : val)
    }
}

function verticalOrder(root: TreeNode | null) {
    if (!root) {
        return []
    }
    let queue: [TreeNode, number][] = [[root, 0]]
    let map: Record<number, number[]> = {}
    while (queue.length) {
        const [node, level] = queue.shift()!

        if (!map[level]) {
            map[level] = []
        }
        map[level].push(node.val)
        if (node.left) {
            queue.push([node.left, level - 1])
        }
        if (node.right) {
            queue.push([node.right, level + 1])
        }
    }
    console.log(map)
    const res = Object.keys(map).sort((a, b)=> Number(a)- Number(b)).map(key=>map[Number(key)])
    return res
}

const myTree = new TreeNode(5)
myTree.left = new TreeNode(4)
myTree.right = new TreeNode(8)

myTree.left.left = new TreeNode(11)
myTree.right.left = new TreeNode(13)
myTree.right.right = new TreeNode(4)

console.log(verticalOrder(myTree))

type RecordOfArray = Record<string, number[]>
const unsortedObject: RecordOfArray = {
    '0': [5, 13],
    '1': [8],
    '2': [4],
    '-1': [4],
    '-2': [11]
};

// The reason for creating [key, value] pairs instead of {key, value} is that
//  Object.fromEntires() expects an array of Key-value pairs in the format [key, value]
// not an object like {key: value}, This is because Object.fromEntires() is designed to 
// work with iterable data(like arrays) and convert it into an object.

const resObj = Object.keys(unsortedObject).sort((a, b)=> Number(a)-Number(b)).map((key)=>{
    return [key, unsortedObject[key]]
})
console.log(resObj, unsortedObject)

const res = Object.keys(unsortedObject).sort((a, b)=> Number(a)-Number(b))
    .reduce<RecordOfArray>((acc, curr)=>{
        acc[curr] = unsortedObject[curr]
        return acc
}, {})
console.log('last line is ',res)
