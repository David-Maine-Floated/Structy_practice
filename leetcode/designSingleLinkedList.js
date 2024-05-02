class Node {
    constructor(val) {
        this.val = val 
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = new Node(-1)
        this.tail = this.head 
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let current = this.head.next
        let i = 0
        while(current) {
            if(i === index) return current.val
            current = current.next
            i++
        }
        return -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newHead = new Node(val)
        newHead.next = this.head.next 
        this.head.next = newHead
        if(newHead.next === null) {
            this.tail = newHead
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        this.tail.next = new Node(val)
        this.tail = this.tail.next
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    // 0 ,   , 1  ,   2
    // node1, node2, node3
    remove(index) {
        let i = 0;
        let curr = this.head;
        while (i < index && curr) {
            i++;
            curr = curr.next;
        }

        // Remove the node ahead of curr
        if (curr && curr.next) {
            if (curr.next === this.tail) {
                this.tail = curr;
            }
            curr.next = curr.next.next;
            return true;
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let curr = this.head.next;
        const res = [];
        while (curr) {
            res.push(curr.val);
            curr = curr.next;
        }
        return res;
    }
}