function findRepeatedDnaSequences(s: string): string[]{
    let seen = new Set<string>()
    let repeat = new Set<string>()
    for(let i = 0; i < s.length - 10; i++){
        let substr = s.slice(i, i+10)
        if(seen.has(substr)){
            repeat.add(substr)
        }else{
            seen.add(substr)
        }
    }
    return Array.from(repeat)
}

const s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
console.log(findRepeatedDnaSequences(s))