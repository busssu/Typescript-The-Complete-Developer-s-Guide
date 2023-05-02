"use strict";
class Sorter {
    // collection: number[];
    // constructor(collection: number[]) {
    //   this.collection = collection;
    // }
    constructor(collection) {
        this.collection = collection;
    }
    sort() { }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
