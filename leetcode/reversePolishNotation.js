class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
       const stack = [];
       const operators = ['+', '-','*', '/']

        for(let i=0; i<tokens.length; i++) {
            let current = tokens[i]
            if(!operators.includes(current)) {
                stack.push(tokens[i])
            } else {
                let secondNum = Number(stack.pop());
                let firstNum = Number(stack.pop());
                console.log(firstNum, secondNum)
                switch(current) {
                    case "+":
                        stack.push(firstNum + secondNum);
                        break;
                    case "-":
                        stack.push(firstNum - secondNum);
                        break;
                    case "*":
                        stack.push(firstNum* secondNum);
                        break;
                    case '/':
                        stack.push(Math.trunc(firstNum / secondNum))           
                        
                }
            }
        }
        return stack[0]
    }
}