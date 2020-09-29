/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    const l = nums.length, i = 0, j = l - 1, result = []
    while(i < l && j> 0 && i < j) {
        const third  = 0 - (nums[i] + nums[j])
        const thirdIndex = nums.slice(i + 1, j).indexOf(third)
        if (thirdIndex > 0) {
            const threeArr = [ nums[i], nums[thirdIndex], nums[j]]
            if (result.findIndex(el => JSON.stringify(el) === JSON.stringify(threeArr)) < 0) {
                result.push([nums[i],nums[thirdIndex],nums[j])
            }
        } else {
            j--
        }
     
    }
};

var threeSum = function (nums) {
    let res = []
    let length = nums.length;
    nums.sort((a, b) => a - b) // 先排个队，最左边是最弱（小）的，最右边是最强(大)的
    if (nums[0] <= 0 && nums[length - 1] >= 0) { // 优化1: 整个数组同符号，则无解
      for (let i = 0; i < length - 2;) {
        if (nums[i] > 0) break; // 优化2: 最左值为正数则一定无解
        let first = i + 1
        let last = length - 1
        do {
          if (first >= last || nums[i] * nums[last] > 0) break // 两人选相遇，或者三人同符号，则退出
          let result = nums[i] + nums[first] + nums[last]
          if (result === 0) { // 如果可以组队
            res.push([nums[i], nums[first], nums[last]])
          }
          if (result <= 0 ) { // 实力太弱，把菜鸟那边右移一位
            while (first < last && nums[first] === nums[++first]){} // 如果相等就跳过
          } else { // 实力太强，把大神那边右移一位
            while (first < last && nums[last] === nums[--last]) {}
          }
        } while (first < last)
        while (nums[i] === nums[++i]) {}
      }
    }
    return res
  }

// var findTwoEqSum = function(nums, sum) {
//     const l = nums.length, i
//     while(i < l && j > 0 && i < j) {
//         let rest = sum - nums[i]
//         restNums = nums.slice(i + 1)
//         findTwoEqSum
//     }
// }

// -4,-2,-1,1,2,3
// @lc code=end

