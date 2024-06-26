var productExceptSelf = function(nums) {

    const prefix = []
    for(let i = 0; i < nums.length; i++) {
        if(i === 0) prefix.push(nums[i])
        else {
            prefix.push(nums[i] * prefix[i-1])
        }
    }
    let suffix = [];

    for(let i = nums.length - 1; i >= 0; i--) {
        if(i === nums.length - 1) suffix.push(nums[i])
        else {
            suffix.push(nums[i] * suffix[suffix.length - 1])
        }
    }
    suffix = suffix.reverse();

    let result = [];
    for(let i = 0; i < nums.length; i++) {
        if(i===0) {
            result.push(suffix[i+1])
        } else if(i===nums.length - 1) {
            result.push(prefix[i-1])
        } else {
            result.push(prefix[i-1] * suffix[i+1])
        }
    }

    return result
}


var productExceptSelfBetter = function(nums) {

    const result = new Array(nums.length).fill(1)
    
    let prefix = 1
    for (let i = 0; i < nums.length; i++) {

        result[i] *= prefix
        prefix *= nums[i] 
    }
    console.log(result)
    let postfix = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= postfix
        postfix *= nums[i]
    }

    return result 
}