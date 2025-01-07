function simplifyPath(path: string): string{
    let arr = path.split("/")
    console.log(arr)
    let stack = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == '' || arr[i] == '.'){
            continue
        }else if(arr[i] == '..'){
            stack.pop()
        }else if(arr[i]){
            stack.push(arr[i])
        }
    }

    return `/${stack.join('/')}`
}
const path = "/home//foo/"
const path2 =  "/../"
const path3 = "/.../a/../b/c/../d/./"
const path4 = "/home/user/Documents/../Pictures"
console.log(simplifyPath(path3))