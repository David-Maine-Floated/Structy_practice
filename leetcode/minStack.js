class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
        this.nextSlot = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack[this.nextSlot] = val;
        if(this.nextSlot === 0) this.minStack[this.nextSlot] = val
        else {
           this.minStack[this.nextSlot] = Math.min(val, this.minStack[this.nextSlot - 1]);
        }

        this.nextSlot++
    }

    /**
     * @return {void}
     */
    pop() {
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
        return this.minStack[this.nextSlot-1]
    }
}