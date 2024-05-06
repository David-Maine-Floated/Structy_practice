class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}



class LinkedList {
    constructor() {
        this.head = new Node(null)
        this.tail = this.head 
    }

    /**
     * @param {number} index
     * @return {number}
     */
    //index = 0
    /// head, 1, null
    get(index) {
        let current = this.head.next;
        let i = 0
        while(current) {
            if(i === index) {
                return current.val
            }
            i++; 
            current = current.next
        }
        return -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newHead = new Node(val);
        newHead.next = this.head.next 
        this.head.next = newHead
        if(!newHead.next) {
            this.tail = newHead;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newTail = new Node(val);
        this.tail.next = newTail;
        this.tail = newTail
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    // index = 1
    // dummny, 0,    1 
    //head, val = 2, val = 3, val = 4
    remove(index) {
        let current = this.head
        let i = 0;
        while(i < index && current) {
            i++;
            current = current.next;
        }
        if(current && current.next) {
            if(current.next === this.tail) {
                this.tail = current
            }
            current.next = current.next.next
            return true 
        } 
        return false 
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let result = [];
        let current = this.head.next;
        while(current) {
            result.push(current.val);
            current = current.next
        }
        return result
    }
}