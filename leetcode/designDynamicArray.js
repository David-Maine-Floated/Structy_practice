class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = new Array(this.capacity)
        this.length = 0;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.storage[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.storage[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.capacity === this.length) {
            this.resize()
        }
        this.storage[this.length] = n
        this.length++
    }

    /**
     * @returns {number}
     */
    popback() {
        if (this.length > 0) {
            // soft delete the last element
            this.length--;
        }
        return this.storage[this.length];
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity *= 2
        const newArr = new Array(this.capacity)
        for(let i = 0; i < this.length; i++) {
            newArr[i] = this.storage[i]
        }
        this.storage = newArr
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.length
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity
    }
}