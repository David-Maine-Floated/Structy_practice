// strs = ["eat","tea","tan","ate","nat","bat"]


// function groupAnagrams(words) {

//     let count = {}

//     words.forEach(word => {
//         let score = 0
//         let sorted = word.split('').sort().join('')

//         if(!count[sorted]) {
//             count[sorted] = [word]
//         } else {
//             count[sorted].push(word)
//         }
//     })
//     return Object.values(count)

// }


// console.log(groupAnagrams(strs))


// Write a function to find the longest common prefix string amongst an array of strings.
strs = ["flower","flow","flight"]


function commonPrefix(words) {
    let longest = ''
    let subStr = ''
    let i = 0
    while(i < words[0].length) {
        let char = words[0][i]
        if(words.every(word => word[i] === char)) {
            subStr += char 
        } else {
            console.log(subStr)
            if(longest.length < subStr.length) {
                longest = subStr
                console.log(longest, subStr)
            }
            subStr = ""
        }
        i++
    }

    return longest
}

console.log(commonPrefix(strs))