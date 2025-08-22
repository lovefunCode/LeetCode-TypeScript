interface NodeItem{
    id: number,
    value: string
}

interface TreeNode{
    id: number,
    value?: string,
    children?: TreeNode[] 
}

const sourceList: TreeNode[] = [
  { id: 1, value: 'A' },
  { id: 2, children: [
    { id: 3, value: 'B', children: [{ id: 4, value: 'D' }] },
    { id: 5, value: 'E' }
  ]},
  { id: 6, value: 'F' }
]; 
 
const targetList = [
  { id: 1, value: 'A' },
  { id: 3, value: 'B' },
  { id: 4, value: 'D' },
  { id: 5, value: 'E' },
  { id: 6, value: 'F' }
]



function treeTraverse(list:TreeNode[]): NodeItem[]{
    const result: NodeItem[] = []

    function dfs(nodes:TreeNode[]){
        for(const node of nodes){
            if(node.value){
                result.push({
                    id: node.id,
                    value: node.value
                })
            }
            if(node.children){
                dfs(node.children)
            }
        }
    }
    dfs(list)
    return result
}
console.log(treeTraverse(sourceList))

