class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum = function(nums, target) {
    let point1 = 0;
    let point2 = 1;

    while (point1 < nums.length - 1) {
        if (nums[point1] + nums[point2] === target) {
            return [point1, point2];
        }

        point2 += 1;

        if (point2 === nums.length) {
            point1 += 1;
            point2 = point1 + 1;
        }
    }
}
}
