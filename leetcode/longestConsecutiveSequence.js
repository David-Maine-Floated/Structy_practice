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

//its still 0(n) becuase we're only maximally iterating over the input array twice. so its techincally 0(2n) aka 0(n)