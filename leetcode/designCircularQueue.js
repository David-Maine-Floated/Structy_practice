/**
 * @param {number} k
 */

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

var MyCircularDeque = function(k) {
    this.maxSize = k;
    this.size = 0;
    this.dummyHead = new Node(null);
    this.tail = this.dummyHead;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.size === this.maxSize) return false;

    const newNode = new Node(value);
    newNode.next = this.dummyHead.next;
    newNode.prev = this.dummyHead;
    if(this.tail === this.dummyHead) this.tail = newNode
    this.dummyHead.next = newNode;
    this.size += 1
    return true   
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.size === this.maxSize) return false;

    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.size += 1

    return true
};

/**
 * @return {boolean}
 */
// dummyHead, val 1, null
MyCircularDeque.prototype.deleteFront = function() {

    if(!this.dummyHead.next) return false
    if(this.dummyHead.next.next) {
        this.dummyHead.next.next.prev = this.dummyHead
    } 
    this.dummyHead.next = this.dummyHead.next.next
    if(!this.dummyHead.next) this.tail = this.dummyHead

    this.size -= 1
    return true 
};

/**
 * @return {boolean}
 */

// dummyHead, val 1, 

MyCircularDeque.prototype.deleteLast = function() {
 if(this.tail === this.dummyHead) return false;

    const newTail = this.tail.prev;
    if(newTail) {
        newTail.next = null; // Update next pointer of the new tail
        this.tail = newTail; // Move the tail pointer
    } else {
        this.dummyHead.next = null; // If only one node, update dummyHead
        this.tail = this.dummyHead;
        this.tail.prev = null // Set tail back to dummyHead
    }
    // if(!this.tail.prev) this.tail = this.dummyHead // Corrected

    this.size -= 1;
    return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(!this.dummyHead.next) return -1
    return this.dummyHead.next.val;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(this.size===0) return -1
    return this.tail.val
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    if(this.size===0) return true 
    return false 
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    if(this.size === this.maxSize) return true 
    return false 
};