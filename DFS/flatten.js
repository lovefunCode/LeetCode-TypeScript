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

function flatten(arr){
    let result = []
    dfs(arr)
    function dfs(nodes){
        if(!Array.isArray(nodes)){
            return
        }
       for(const node of nodes){
            if(node.hasOwnProperty('value')){
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

    return result
}

console.log(flatten(sourceList))