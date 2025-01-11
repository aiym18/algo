/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums || nums.length === 0) return 0;

    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};