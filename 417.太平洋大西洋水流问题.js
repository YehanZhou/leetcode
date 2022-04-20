/*
 * @lc app=leetcode.cn id=417 lang=javascript
 *
 * [417] 太平洋大西洋水流问题
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    if(!heights || !heights[0]) return [];
    const m = heights.length; // 行数
    const n = heights[0].length; // 列数
    const flow1 = Array.from({length: m}, () => new Array(n).fill(false));
    const flow2 = Array.from({length: m}, () => new Array(n).fill(false));
    const dfs = (r, c, flow) => {
        flow[r][c] = true;
        [[r-1,c], [r+1,c],[r,c-1],[r,c+1]].forEach(([nr, nc]) => {
            if (
                // 保证在矩阵内
                nr >= 0 && nr < m &&
                nc >= 0 && nc < n &&
                // 没访问过
                !flow[nr][nc] &&
                // 逆流而上
                heights[nr][nc] >=heights[r][c]
            ) {
                dfs(nr, nc, flow);
            }
        });
    }
    // 沿海岸线出发
    for(let r = 0; r < m; r++) {
        dfs(r, 0, flow1);
        dfs(r, n - 1, flow2);
    }
    for(let c = 0; c < n; c++) {
        dfs(0, c, flow1);
        dfs(m - 1, c, flow2);
    }
    const res = [];
    for(let r = 0; r < m; r++) {
        for(let c = 0; c < n; c++) {
            if(flow1[r][c] && flow2[r][c]) {
                res.push([r, c])
            }
        }
    }
    return res;
};

// @lc code=end

