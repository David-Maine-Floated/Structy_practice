class MinStack {
    constructor() {
        this.stack = [];
        this.nextSlot = 0;
        this.min = -Infinity
        this.prevMin = -Infinity
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        //if stack is empty, set prev min to this new val
        if(this.nextSlot === 0) {
            this.prevMin = val;
            this.min = val;
        } else {
            //check new val against this.min, if val is larger than first re-assign prev min
            //to current min, then re-assign this.min to the new val
            if(val < this.min) {
                this.prevMin = this.min;
                this.min = val; 
            }
        }
    
        this.stack[this.nextSlot] = val;
        this.nextSlot++
    }

    /**
     * @return {void}
     */
    pop() {
        let valueToRemove = this.stack[this.nextSlot-1];
        if(this.min === valueToRemove) {
            this.min = this.prevMin
        }
        this.nextSlot = this.nextSlot-1

    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.nextSlot-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}