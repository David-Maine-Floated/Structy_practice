var longestConsecutive = function(nums) {
    let numsSet = new Set(nums)
    let longest = 0
    for(let num of numsSet) {
        if(!numsSet.has(num-1)) {
            let count = 1;
            let newNum = num + 1
            while(numsSet.has(newNum)) {
                count++
                newNum++
            }
            longest = Math.max(longest, count)
        }
    }
    return longest

};