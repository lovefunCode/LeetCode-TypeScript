// export {}; // Makes this file a module
// Do not return anything, modify nums1 in-place instead.
function mergeSortedArray(nums1: number[], m: number, nums2: number[], n: number):void{
    if(n == 0){
        return
    }
    let right = m+n-1
    let i = m -1
    let j = n-1
    while(j >= 0){
        if(i >= 0 && nums1[i] >= nums2[j]){
            nums1[right] = nums1[i]
            i--
        }else{
            nums1[right] = nums2[j]
            j--
        }
        right--
    }
    console.log(nums1)
}
const nums1: number[] = [1,2,3,0,0,0], m = 3, nums2: number[]= [2,5,6], n = 3
// const nums1 = [0], m = 0, nums2 = [1], n = 1
console.log(mergeSortedArray(nums1, m, nums2, n))
