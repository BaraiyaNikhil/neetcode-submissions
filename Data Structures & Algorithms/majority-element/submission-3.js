class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        nums.sort((a, b) => b - a);
        return nums[Math.floor(nums.length / 2)];
    }
}
