/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const nums = [...nums1, ...nums2]
    let result = 0
    nums.sort((a,b) => a - b)
    const l = nums.length
    if (l % 2 === 0) { // l为偶数时
        result = (nums[l/2-1] + nums[l/2])/2
    } else {
        result = nums[Math.floor(l/2)]
    }
    return result
};

// 0,1,2,3,4  5/2
// @lc code=end

