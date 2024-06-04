class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(heights) {
        const maxLeft = {}
        let maxL = 0
        for(let i = 0; i < heights.length; i++) {
            maxL = Math.max(maxL, heights[i])
            maxLeft[i] = maxL
        }

        const maxRight = {}
        let maxR = 0
        for(let i = heights.length - 1; i >= 0; i--) {
            maxR = Math.max(maxR, heights[i])
            maxRight[i] = maxR
        }

        const minHeights = {}
        for(let i = 0; i < heights.length; i++) {
            let currMin = Math.min(maxLeft[i], maxRight[i])
            minHeights[i] = currMin
        }

        let total = 0;
        for(let i = 0; i < heights.length; i++) {
            let currHeight = heights[i]
            let currSum = minHeights[i] - currHeight 
            if(currSum > 0) total += currSum  
        }
        return total
    }
}