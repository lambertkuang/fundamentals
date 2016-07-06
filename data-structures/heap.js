'use strict';

class MinHeap {
  constructor() {
    this.store = [];
  }

  insert(val) {
    this.store.push(val);
    this._shiftUp(this.store.length - 1);
  }

  _shiftUp(index) {
    if (index === undefined || index === null) {
      throw new Error('Needs index');
    }

    let parentIndex = Math.floor((index - 1) / 2);

    if (parentIndex >= 0) {
      if (this.store[parentIndex] > this.store[index]) {
        let temp = this.store[parentIndex];
        this.store[parentIndex] = this.store[index];
        this.store[index] = temp;
        this._shiftUp(parentIndex);
      }
    }
  }

  get size() {
    return this.store.length;
  }

  // print like a tree
  print() {
    const size = this.size;
    const data = this.store.slice();
    let bsVal = 1;
    let index = 0;
    let curLine = '';

    while (data.length) {
      for (let i = bsVal; i > 0; i--) {
        if (data.length) {
          curLine += data.shift() + ' ';
        }
      }
      bsVal *= 2;
      console.log(curLine);
      curLine = '';
    }
  }
}

// let heap = new MinHeap();
// heap.insert(9);
// heap.insert(6);
// heap.insert(4);
// heap.insert(7);
// heap.insert(5);
// heap.insert(4);
// heap.insert(2);
// heap.insert(1);
// heap.insert(6);
// heap.insert(8);
// heap.insert(3);
// heap.insert(0);
// heap.print();




