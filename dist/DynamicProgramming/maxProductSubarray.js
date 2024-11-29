function maxProductSubarray(nums) {
    let preMax = nums[0];
    let preMin = nums[0];
    let res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let currMax = Math.max(nums[i], nums[i] * preMax, nums[i] * preMin);
        let currMin = Math.min(nums[i], nums[i] * preMax, nums[i] * preMin);
        preMax = currMax;
        preMin = currMin;
        res = Math.max(res, preMax);
    }
    return res;
}
const nums = [2, 3, -2, 4];
console.log(maxProductSubarray(nums));
export {};
