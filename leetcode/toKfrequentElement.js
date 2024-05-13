/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = {}

    for(let num of nums) {
        if(!count[num]) count[num] = 0;
        count[num] += 1;
    }
    console.log(count)
    const bucket = new Array(nums.length + 1)

    for(let num in count) {
        // console.log('num', num, 'count', count[num])
        let index = count[num];
        const numberNum = Number(num)
        if(bucket[index] === undefined) bucket[index] = new Array()
        console.log(bucket[index])
        bucket[index].push(numberNum)
    }

    console.log(bucket)
    const result = []
    let i = bucket.length - 1
    while(result.length < k) {
        if(bucket[i] && bucket[i].length) {
            // console.log(bucket[i])
            result.push(bucket[i].pop())
        } else {
            i--
        }
    }

    return result 
       
};