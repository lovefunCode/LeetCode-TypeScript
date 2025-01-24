function isInterleave(s1: string, s2: string, s3: string): boolean {
    if(s1 == '' && s2 == '' && s3 == ''){
        return true
    }
    if ((s1.length + s2.length) !== s3.length) {
        return false
    }
    function backtrack(str1Index: number, str2Index: number, str3Index: number): boolean {
        if (s1.length == str1Index && s2.length == str2Index && s3.length === str3Index) {
            return true

        }
        if (str1Index < s1.length && s1[str1Index] == s3[str3Index]) {
            if(backtrack(str1Index+1, str2Index, str3Index+1)){
                return true
            }
        }
        if (str2Index < s2.length &&  s2[str2Index] == s3[str3Index]) {
            if(backtrack(str1Index, str2Index+1, str3Index+1)){
                return true
            }
        }

        return false
    }

    return backtrack(0, 0, 0)
}
const s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
console.log(isInterleave(s1, s2, s3))

console.log(s1.slice(1))
