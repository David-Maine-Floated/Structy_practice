/**
 * @param {number} k
 */


 //capacity = 3
 //[none,none,none]
 //head = 2
 // 0 + 3 - 1 % 3
class MyCircularDeque {
    constructor(k) {
        this.queue = new Array(k)
        this.capacity = k
        this.head = 0;
        this.tail = 0;
        this.size = 0;
    }

    insertFront(val) {
        if(this.isFull()) return false;
        this.head = (this.head - 1 + this.capacity) % this.capacity;
        this.queue[this.head] = val;
        this.size++
        return true 

    }

    insertLast(val) {
        if(this.isFull()) return false;
        this.queue[this.tail] = val;
        this.size += 1
        this.tail = (this.tail + 1) % this.capacity;
        return true 
    }

    deleteFront() {
        if(this.isEmpty()) return false;
        this.head = (this.head + 1) % this.capacity;
        this.size-- 
        return true 
    }

    deleteLast() {
        if(this.isEmpty()) return false;
        this.tail = (this.tail - 1 + this.capacity) % this.capacity
        this.size--
        return true;
    }

    getFront() {
        if(this.isEmpty()) return -1;
        return this.queue[this.head]
    }

    getRear() {
        if(this.isEmpty()) return -1;
        return this.queue[(this.tail-1 + this.capacity )% this.capacity]  
    }   

    isEmpty() {
        return this.size === 0
    }

    isFull() {
        return this.size === this.capacity
    }
};