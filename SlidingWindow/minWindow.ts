function minWindow(s: string, t: string): string {
    let res = ''
    let map = new Map()
    for (let i = 0; i < t.length; i++) {
        let letter = t[i]
        if (!map.has(letter)) {
            map.set(letter, 1)
        } else {
            map.set(letter, map.get(letter) + 1)
        }
    }
    console.log(map)
    let left = 0, right = 0
    let len = Infinity
    let count = map.size

    while (right < s.length) {
        let rLetter = s[right]
        if (map.has(rLetter)) {
            map.set(rLetter, map.get(rLetter) - 1)
            if (map.get(rLetter) == 0) {
                count--
            }
        }
        right++

        while(count == 0){
            if((right-left) < len){
                len = right-left
                res = s.slice(left,right)
            }
            let lLetter = s[left]
            if(map.has(lLetter)){
                map.set(lLetter, map.get(lLetter)+1)
                if(map.get(lLetter) > 0){
                    count++
                }
            }
            left++
        }
    }

    return res
}

const s = "ADOBECODEBANC", t = "ABC"
console.log(minWindow(s, t))