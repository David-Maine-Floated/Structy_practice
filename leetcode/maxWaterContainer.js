class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let back = 0; 
        let front = heights.length - 1
        let maxVol = 0;

        while(back < front) {
            let containerLength = front - back;
            let currVol = containerLength * Math.min(heights[front], heights[back])
            maxVol = Math.max(currVol, maxVol) 
            if(heights[back] > heights[front]) front--
            else back++
        }
        return maxVol
    }
}