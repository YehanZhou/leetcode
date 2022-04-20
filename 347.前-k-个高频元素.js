/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
class MinHeap {
    constructor() {
        this.heap = []
    }
    getParentIndex(i) {
        return (i - 1) >> 1
    }
    getLeftIndex(i) {
        return i * 2 + 1
    }
    getRightIndex(i) {
        return i * 2 + 2
    }
    swap(i1, i2) {
        const tmp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = tmp
    }
    shiftUp(i) {
        if (i === 0) return
        const p = this.getParentIndex(i)
        if(this.heap[p] && (this.heap[i].val < this.heap[p].val)) {
            this.swap(p, i)
            this.shiftUp(p)
        }
    }
    shiftDown(i) {
        if(i === this.heap.length - 1) return
        const l = this.getLeftIndex(i)
        const r = this.getRightIndex(i)
        if(this.heap[l] && (this.heap[l].val < this.heap[i].val)) {
            this.swap(l, i)
            this.shiftDown(l)
        }
        if(this.heap[r] && (this.heap[r].val < this.heap[i].val)) {
            this.swap(r, i)
            this.shiftDown(r)
        }
    }
    insert(val) {
        this.heap.push(val)
        this.shiftUp(this.heap.length - 1)
    }
    pop() { // 删除堆顶
        // this.swap(0, this.heap.length - 1)
        this.heap[0] = this.heap.pop()
        this.shiftDown(0)
    }
    peek() {
        return this.heap[0]
    }
    size() {
        return this.heap.length
    }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map()
    nums.forEach(n => {
        map.set(n, map.has(n) ? map.get(n) + 1 : 1)
    })
    const h = new MinHeap()
    map.forEach((val, key) => {
        h.insert({val, key})
        if (h.size() > k) {
            h.pop()
        }
    })
    return h.heap.map(x => x.key)
};
// @lc code=end

