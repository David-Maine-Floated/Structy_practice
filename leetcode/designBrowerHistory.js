class BrowserHistory {
    constructor(homepage) {
        this.history = [homepage]; // [leetcode, google, facebook, youtube, linkedIn]
        this.currentIndex = 0//     2    
    }

    visit(url) { 
        this.history = this.history.slice(0, this.currentIndex + 1)
        this.history.push(url)
        this.currentIndex = this.history.length - 1
    }

    back(steps) {
        let newIndex = this.currentIndex - steps //  2 - 7  = -5
        if(newIndex < 0) newIndex = 0
        this.currentIndex = newIndex
        return this.history[newIndex]
    }

    forward(steps) {
        let newIndex = this.currentIndex + steps //  4 + 2 
        if(newIndex > this.history.length - 1) newIndex = this.history.length - 1
        this.currentIndex = newIndex
        return this.history[newIndex]
    }
};