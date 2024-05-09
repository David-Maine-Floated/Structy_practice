var twoSum = function(nums, target) {
    const count = {};
    for(let i = 0; i < nums.length; i++) {
        let remainder = target - nums[i]
        console.log(nums[i], remainder)
        if(remainder in count) return [count[remainder], i]
        count[nums[i]] = i
    }
};
