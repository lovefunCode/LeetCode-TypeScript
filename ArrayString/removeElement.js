function removeElement(nums, val) {
    var writeIndex = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    return writeIndex;
}
var nums = [3, 2, 2, 3];
var val = 3;
console.log(removeElement(nums, val));
