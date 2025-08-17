
function isSubset(A: (number|string)[], B:(number|string)[]){
    let i = 0, j = 0
    // remove duplicate
    // B = [...new Set(B)]   O(n)
    const C = new Array(...new Set(B))
    console.log(C)
    while(i < A.length && j < B.length){
        if(j > 0 && B[j] == B[j-1]){
            j++
            continue
        }
        if(A[i] == B[j]){
            i++
            j++
        }else if(A[i] < B[j]){
            i++
        }else{
            return false
        }
    }
    return j === B.length
}

const A = [1, 2, 3, 4], B = [2, 2, 2, 4]

console.log(isSubset(A, B))