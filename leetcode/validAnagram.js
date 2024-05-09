var isAnagram = function(s, t) {
    const count = {};
    for(let char of s) {
        if(!count[char]) count[char] = 0
        count[char] += 1
    }
 
    for (let char of t) {
        if(!count[char]) return false;
        count[char] -= 1
    }

    for(let char in count) {
        if(count[char] !== 0) return false 
    }

    return true
};