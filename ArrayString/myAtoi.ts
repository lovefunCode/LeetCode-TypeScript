export {}
function myAtoi(s: string): number{
    s = s.trim()  // Trim leading and trailing whitespace
    let flag = true   // flag for positive or negative
    let newStr = ''
    let index = 0
    // check if the first character is "+" or "-"
    if(s[index] == '-' || s[index] == '+'){
        flag = s[index] == '-' ? false : true
        index++
    }
    // Iterate through the string to gather digits
    for(let i = index; i < s.length; i++){
        let char = s[i]
        // If the character is not a digit, stop processing
        if(char < '0' || char > '9'){
            break;
        }
        newStr += s[i]
    }
    console.log(newStr)
    return flag ? Number(newStr) : - Number(newStr)
}
const s = "words and 987"
console.log(myAtoi("0-1"))
console.log(myAtoi(s))