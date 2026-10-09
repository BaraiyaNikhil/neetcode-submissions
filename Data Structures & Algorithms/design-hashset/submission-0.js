class MyHashSet {
    map;
    constructor() {
        this.map = {};
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if(this.map[key]) return;
        this.map[key] = 1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        delete this.map[key];
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        if(this.map[key]) return true;
        else return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
