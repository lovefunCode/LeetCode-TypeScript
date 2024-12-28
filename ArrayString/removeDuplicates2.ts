export {}; // Makes this file a module
function removeDuplicates2(nums: number[], threshold: number): number {
    let count = 1
    let newIndex = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            count = 1
        } else if (nums[i] == nums[i - 1]) {
            count++
        }
        if (count < threshold) {
            nums[newIndex] = nums[i]
            newIndex++
        }
    }
    const newArr = nums.slice(0, newIndex)
    console.log(nums, newIndex)
    console.log(newArr)
    return count
}
const nums: number[] = [1, 1, 1, 2, 2, 3]
console.log(removeDuplicates2(nums, 2))