class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let front = 0;
        let back = numbers.length - 1;

        while(front < back) {
            let sum = numbers[front] + numbers[back];
            console.log(sum, target)
            console.log(front, back)
            if(sum === target) return [front + 1, back + 1]
            else if(sum > target) {
                back--
            } else {
                front++
            }
        }
    }
}
