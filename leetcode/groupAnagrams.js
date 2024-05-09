var groupAnagrams = function(strs) {
    const count = {}
    for(let str of strs) {
        const sorted = str.split("").sort().join('')
        if(!(sorted in count)) count[sorted] = [];
 
        count[sorted].push(str)
    }

    return Object.values(count)
};