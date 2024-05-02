// class BrowserHistory {
//     constructor(homepage) {
//         this.history = [homepage]; // [leetcode, google, facebook, youtube, linkedIn]
//         this.currentIndex = 0//     2    
//     }

//     visit(url) { 
//         this.history = this.history.slice(0, this.currentIndex + 1)
//         this.history.push(url)
//         this.currentIndex = this.history.length - 1
//     }

//     back(steps) {
//         let newIndex = this.currentIndex - steps //  2 - 7  = -5
//         if(newIndex < 0) newIndex = 0
//         this.currentIndex = newIndex
//         return this.history[newIndex]
//     }

//     forward(steps) {
//         let newIndex = this.currentIndex + steps //  4 + 2 
//         if(newIndex > this.history.length - 1) newIndex = this.history.length - 1
//         this.currentIndex = newIndex
//         return this.history[newIndex]
//     }
// };

//better cuz we use doubley linked list:

/**
 * @param {string} homepage
 */


class Node {
    constructor(url) {
        this.url = url;
        this.next = null;
        this.prev = null
    }
}


var BrowserHistory = function(homepage) {
    this.current = new Node(homepage)
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    const newUrl = new Node(url)
    this.current.next = newUrl;
    newUrl.prev = this.current
    this.current = newUrl
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    //while steps > 0
    //set current node to current.prev
    while(steps > 0 && this.current.prev !== null) {
        this.current = this.current.prev
        steps--
    }
    return this.current.url
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while(steps > 0 && this.current.next !== null) {
        this.current = this.current.next
        steps--
    }
    return this.current.url
};

