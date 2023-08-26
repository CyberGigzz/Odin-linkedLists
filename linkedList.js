'use strict';

class Node {
  constructor(value) {
    this.value = value || null;
    this.nextNode = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    let tmp = null;
    if (this.head != null) tmp = this.head;
    this.head = new Node(value);
    this.head.nextNode = tmp;
  }

  append(value) {
    if (this.head == null) this.prepend(value);
    else {
      let tmp = this.head;
      while (tmp.nextNode != null) tmp = tmp.nextNode;
      tmp.nextNode = new Node(value);
    }
  }

  size() {
    let tmp = this.head;
    let counter = 0;
    while (tmp != null) {
      counter++;
      tmp = tmp.nextNode;
    }
    return counter;
  }

  headNode() {
    return this.head;
  }

  tail() {
    let tmp = this.head;
    while (tmp.nextNode != null) tmp = tmp.nextNode;
    return tmp;
  }

  at(index) {
    let tmp = this.head;
    for (let i = 0; i < index; i++) {
      tmp = tmp.nextNode;
      if (tmp == null) return 'There is no item for this index';
    }
    return tmp;
  }

  pop() {
    let cur = this.head;
    let prev = null;
    while (cur.nextNode != null) {
      prev = cur;
      cur = cur.nextNode;
    }
    prev.nextNode = null;
  }

  contains(value) {
    let tmp = this.head;
    while (tmp != null) {
      if (tmp.value === value) return true;
      tmp = tmp.nextNode;
    }
    return false;
  }

  find(value) {
    let tmp = this.head;
    let index = 0;
    while (tmp != null) {
      if (tmp.value === value) return index;
      tmp = tmp.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let tmp = this.head;
    let stringList = '';
    while (tmp != null) {
      stringList += `(${tmp.value}) -> `;
      tmp = tmp.nextNode;
    }
    return (stringList += 'null');
  }

  insertAt(value, index) {
    if (this.head == null) this.prepend(value);
    else {
      let cur = this.head;
      let prev = null;
      for (let i = 0; i < index; i++) {
        prev = cur;
        cur = cur.nextNode;
        if (cur == null) break; // if index is bigger than end of list, add node at end of list
      }
      const tmp = new Node(value);
      prev.nextNode = tmp;
      tmp.nextNode = cur;
    }
  }

  removeAt(index) {
    if (this.head == null) return 'List is already empty';

    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }

    let cur = this.head;
    let prev = null;
    for (let i = 0; i < index; i++) {
      prev = cur;
      cur = cur.nextNode;
      if (cur == null) return 'There is no item for this index';
    }
    prev.nextNode = cur.nextNode;
  }
}

const ll = new linkedList();

ll.prepend(1);
ll.append(2);
ll.append(3);
ll.append(4);

console.log(ll);
console.log(ll.size());
console.log(ll.headNode());
console.log(ll.tail());
console.log(ll.at(0));
console.log(ll.at(2));

ll.pop();
console.log(ll.size());
console.log(ll.contains(2));
console.log(ll.find(3));
console.log(ll.toString());
console.log(ll.insertAt(200, 2));
console.log(ll.toString());
console.log(ll.removeAt(0));
console.log(ll.toString());
