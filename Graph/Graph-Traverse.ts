
const dep1 = {
  "a" : ["b", "c"],
  "b": ["c"],
  "c": [],
  "d": []
}
const dep2 =  {
  "a" : ["b", "c"],
  "b": ["c"],
  "c": ["b"],
  "d": []
}

function topologicalGraph(dependencies){
    let visited = new Set()
    let result = []
    for(const [ node, dep] of Object.entries(dependencies)){
        dfs(node)
    }
    function dfs(node){
        if(visited.has(node)){
            return
        }
        visited.add(node)
        for(const dp of dependencies[node]){
            if(dp){
                dfs(dp)
            }
        }
        result.push(node)
    }
    return result
}
console.log(topologicalGraph(dep2))