function longestPalindrome(s: string): string{
    let res:string = ''
    let mid = Math.floor(s.length/2), left = 0, right = 0
    // even
    if(s.length % 2 == 0){
        left = mid -1
        right = mid
    } else{
        // odd
        left = mid - 1
        right = mid + 1
        res = s[mid]
    }
    console.log()
    while(left >= 0 && right <= s.length && s[left] == s[right]){
        res = s[left] + res + s[right]
        left--
        right++
    }
    return res
}
const s = "babad"
const s2 = "cbbd"
console.log(longestPalindrome(s))
console.log(longestPalindrome(s2))