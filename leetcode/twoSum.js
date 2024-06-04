class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
       let l = 0;
       let r = numbers.length -1
       
       while(l < r) {
        let sum = numbers[l] + numbers[r]
        if(sum < target) {
            l++
        } else if(sum > target) {
            r--
        } else {
            return [l + 1, r + 1 ]
        }
       }
       return []
    }
}