/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
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
        if(this.heap[i] < this.heap[p]) {
            this.swap(p, i)
            this.shiftUp(p)
        }
    }
    shiftDown(i) {
        if(i === this.heap.length - 1) return
        const l = this.getLeftIndex(i)
        const r = this.getRightIndex(i)
        if(this.heap[i] > this.heap[l]) {
            this.swap(l, i)
            this.shiftDown(l)
        }
        if(this.heap[i] > this.heap[r]) {
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
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const h = new MinHeap()
    nums.forEach(n => {
        h.insert(n)
        if(h.size() > k) {
            h.pop()
        }
    })
    return h.peek()
};
// @lc code=end

