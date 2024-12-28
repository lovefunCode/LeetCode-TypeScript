export {}; // Makes this file a module

function lengthOfLongestSubstring(s: string): number{
    let set = new Set<string>([s[0]])
    let maxCount = 0
    let left = 0
    for(let right = 0; right < s.length; right++){
        if(!set.has(s[right])){
            set.add(s[right])
            maxCount = Math.max(maxCount, set.size)
        }else{
            set.delete(s[left])
            set.add(s[right])
            left++
        }
    }
    return maxCount
}

const s:string = "abcabcbb" 
console.log(lengthOfLongestSubstring(s))