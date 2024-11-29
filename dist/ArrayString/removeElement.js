function removeElement(nums, val) {
    let writeIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    return writeIndex;
}
let nums = [3, 2, 2, 3];
let val = 3;
console.log(removeElement(nums, val));
export {};
