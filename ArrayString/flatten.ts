const sourceList = [
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

interface TreeNode{
    id: number,
    value?: string,
    children?: TreeNode[]
}

function flatten(arr: TreeNode[]){
    let result: {id: number, value: string}[] = []
    function dfs(nodes: TreeNode[]): void{
        for(const node of nodes){
            // if('value' in node){
            if(node.value != undefined){
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
    dfs(arr)
    return result
}
console.log(flatten(sourceList))
