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

  _shiftDown(index) {
    if (index === undefined || index === null) {
      throw new Error('Needs index');
    }

    const currentValue = this.store[index];
    const ind1 = 2 * index + 1;
    const ind2 = 2 * index + 2;
    const child1 = this.store[ind1];
    const child2 = this.store[ind2];

    // case 1: both children have values. case2: only first child has a value. other: no need to do anything
    if (child1 !== undefined && child1 !== null && child2 !== undefined && child2 !== null) {
      if (child2 < child1) {
        // compare and shift down with index 1
        if (child2 < currentValue) {
          this.store[index] = child2;
          this.store[ind2] = currentValue;
          this._shiftDown(ind2);
        }
      } else {
        if (child1 < currentValue) {
          this.store[index] = child1;
          this.store[ind1] = currentValue;
          this._shiftDown(ind1);
        }
      }
    } else if (child1 !== undefined && child1 !== null) {
      if (child1 < currentValue) {
        this.store[index] = child1;
        this.store[ind1] = currentValue;
        this._shiftDown(ind1);
      }
    }
  }

  pop() {
    // put element in last index at root index
    let rootVal = this.store[0];
    let lastVal = this.store.pop();
    this.store[0] = lastVal;

    this._shiftDown(0);

    return rootVal;
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
// console.log('popped val', heap.pop());
// heap.print();

// compare with https://www.cs.usfca.edu/~galles/visualization/Heap.html


