// 1. Array version
function lengthOfLongestSubstring(s: string): number{
    let arr: string[] = [s[0]]
    let maxLen: number = 1
    for(let i = 1; i < s.length; i++){
        while(arr.includes(s[i])){
            arr.shift()
        }
        arr.push(s[i])
        maxLen = Math.max(maxLen, arr.length)
    }
    return maxLen
}
const s: string = "abcdabcbb"
console.log(lengthOfLongestSubstring(s))


// 2. Set version
function lengthOfLongestSubstringSet(s: string): number{
    let set = new Set(s[0])
    let left = 0, right = 1, longestSub = 0
    while(right < s.length){
        if(!set.has(s[right])){
            set.add(s[right])
            longestSub = Math.max(longestSub, set.size)
            right++
        }else{
            set.delete(s[left])
            left++
        }
    }
    return longestSub  
}

const s2: string = "abcdabcbb"
console.log(lengthOfLongestSubstringSet(s2))

