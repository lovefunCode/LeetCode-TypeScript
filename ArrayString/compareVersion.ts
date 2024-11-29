function compareVersion(version1: string, version2: string):number{
    let ver1: string[] = version1.split('.')
    let ver2: string[] = version2.split('.')
    let maxLen: number = Math.max(ver1.length, ver2.length)
    console.log(maxLen)
    for(let i = 0; i < maxLen; i++){
        let n1 = parseInt(ver1[i]) || 0
        let n2 = parseInt(ver2[i]) || 0
        console.log(ver1[i], ver2[i])
        if(n1 > n2){
            return 1
        }else if(n1 < n2){
            return -1
        }
    }
    return 0
}
const version1 = "1.01", version2 = "1.001"
const version3 = "1.2", version4 = "1.10"
// console.log(compareVersion(version1, version2))
console.log(compareVersion(version3, version4))