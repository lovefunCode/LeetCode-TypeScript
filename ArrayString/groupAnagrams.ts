export {}
function groupAnagrams(strs: string[]) : string[][]{
    if(!strs.length){
        return [[""]]
    }
    let newStr: string[] = []
    newStr = strs.map((item)=>{
       return item.split('').sort().join('')
    })
    console.log(newStr)
    let map: Record<string, string[]> = {}
    for(let i = 0; i < newStr.length; i++){
        let char = newStr[i]
        if(!map[char]){
            map[char] = []
        }
        map[char].push(strs[i])
    }
    console.log(Object.values(map))
    return  Object.values(map)
}

const strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs))