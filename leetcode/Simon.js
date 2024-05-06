// bignum! "123", "0"
// "01" 
// add_bignums(string, string): string
// "123"
// " 39"
//  
//
//
// 
//
// add_bignums("111", "6666") = "6777"
// add_bignums("2", "9"): "11"

// -4 + 8 = 4
// -9 + 2 = - 7
// -2 + 1 = - 1
//[4, -7, -1]
//[-1, -7, 4]
//if(stack[0] < 0)
    //    
// 294
// 128
//    166
// '-4' , '8', sum = 4, value = 4, remainder = 0
//stack = ['4',]
// '-9', '2', carry ,  sum = -7, value = -7, remainder = 0 
// stack = ['2', '3']
// '2', '1', carry 1, sum = 4, value = 4, remainder = 0
// stack = ['2', '3', '4', '2'] 

const add_bignums = (string1, string2) => {
    
    let s1 = string1.length - 1
    let s2 = string2.length - 1
    
    let s1Neg = false;
    let s2Neg = false; 
    if(string1[0] === '-') s1Neg = true; 
    if(string2[0] === '-') s2Neg = true;
    
    
    let stack = [];  
    let remainder = 0
    
    while((string1[s1] !== undefined && string1[s1] !== '-' )|| (string2[s2] !== undefined && string2[s2] !== '-') || remainder === 1) {
        let char1 = string1[s1];
        let char2 = string2[s2];
        
        if(!char1) char1 = 0
        if(!char2) char2 = 0
        
        let num1 = Number(char1)
        let num2 = Number(char2)
        if(s1Neg) num1 *= -1 
        if(s2Neg) num2 *= -1 
        
        
        let sum = num1 + num2 + remainder 
        let value = sum % 10 
        
        if(sum >= 10) {
            remainder = 1
        } else {
            remainder = 0
        }
        
        stack.push(value.toString())
        s1--
        s2--
        
    }
    
    let orderedStack = stack.reverse()

    if(orderedStack[0][0] === '-') return handleNeg(orderedStack)
    return handlePos(orderedStack)

        
        
    }
    
    const handleNeg = (stack) => {
        
        let newStack = [stack[0]]
        for(let i = 1; i < stack.length; i++) {
            let currentVal = Number(stack[i])
            if(currentVal > 0) {
                let newVal = currentVal - 10
                let preVal = Number(stack[i-1])
                newStack[i-1] = (preVal + 1).toString()[1]
                newStack[i] = newVal.toString()[1]
            } else {
                newStack.push(stack[i])
            } 
        }
        return newStack.join('')
    }

    const handlePos = (stack) => {
        let newStack = [stack[0]]
        for(let i = 1; i < stack.length; i++) {
            let currentVal = Number(stack[i])
            if(currentVal < 0) {
                let newVal = currentVal + 10
                let preVal = Number(stack[i-1])
                newStack[i-1] = (preVal - 1).toString()
                newStack[i] = newVal.toString()
            } else {
                newStack.push(stack[i])
            } 
        }
        return newStack.join('')
    }
    
console.log(add_bignums("294", "-128"))
console.log(add_bignums("-294", "128"))
console.log(add_bignums("-294", "-128"))