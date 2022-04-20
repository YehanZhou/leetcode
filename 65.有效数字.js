/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    const graph = {
        0: { 'blank': 0, 'sign': 1, 'dot': 2, 'digit': 6 },
        1: { 'dot': 2, 'digit': 6 },
        2: { 'digit': 3 },
        3: { 'digit': 3, 'e': 4 },
        4: { 'digit': 5, 'sign': 7 },
        5: { 'digit': 5 },
        6: { 'digit': 6, 'dot': 3, 'e': 4 },
        7: { 'digit': 5 },
    }
    let state = 0
    for(c of s.trim()) {
        if (c >= '0' && c <= '9') {
            c = 'digit'
        } else if (c === '+' || c === '-') {
            c = 'sign'
        } else if (c === '.') {
            c = 'dot'
        } else if (c === 'e' || c === 'E') {
            c = 'e'
        }
        state = graph[state][c]
        if (state === undefined) return false
    }
    return state === 3 || state === 5 || state === 6
};
// @lc code=end

