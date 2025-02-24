export {}
function lengthOfLongestSubstring(s: string): number{
    let maxLen = 1, left = 0
    let set = new Set(s[0])
    for(let i = 1; i < s.length; i++){
        if(!set.has(s[i])){
            set.add(s[i])
            maxLen = Math.max(maxLen, set.size)
        }else{
            set.delete(s[left])
            left++
        }
    }
    return maxLen
}

const s = "pwwkew"
const s2 = "abcabcbb"
console.log(lengthOfLongestSubstring(s))
console.log(lengthOfLongestSubstring(s2))