class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.arr = new Array(capacity)
        this.capacity = capacity
        this.length = 0
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    //length = 3
    ///[1,1, 1]
    pushback(n) {
        if(this.length === this.capacity) this.resize()
        this.arr[this.length] = n 
        this.length++
       
    }

    /**
     * @returns {number}
     */
    popback() {
        if(this.length > 0) this.length--
        let value = this.arr[this.length]
        this.arr[this.length] = null
        return value 
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity *= 2
        let newArr = new Array(this.capacity)
        for(let i = 0; i < this.length; i++) {
            newArr[i] = this.arr[i]
        }
        this.arr = newArr
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