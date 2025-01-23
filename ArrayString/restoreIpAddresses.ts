export {}
function restoreIpAddresses(s: string): string[]{
    let res: string[] = []
    function backtrack(start: number, parts: string[]){
        if(parts.length == 4 && start == s.length){
            res.push(parts.join('.'))
            return
        }
        for(let i = 1; i <= 3 && i + start <= s.length; i++){
            const part = s.slice(start, i + start)
            if(isValid(part)){
                parts.push(part)
                backtrack(start+i, parts)
                parts.pop()
            }
        }
    }
    function isValid(octet: string): boolean{
        if(octet.length > 1 && octet[0] == '0') return false
        if(Number(octet) <= 255 && Number(octet) >= 0){
            return true
        }
        return false
    }
    backtrack(0, [])

    return res
}

const s = "25525511135"
console.log(restoreIpAddresses(s))