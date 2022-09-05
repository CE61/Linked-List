class LinkedList {
  constructor(value) {
    this.head = new Node(value, null);
  }
  append(value) {
    let nodeIndex = this.head;
    while (nodeIndex != null) {
      if (nodeIndex.nextNode == null) {
        nodeIndex.nextNode = new Node(value);
        nodeIndex = null;
      } else {
        nodeIndex = nodeIndex.nextNode;
      }
    }
  }
  prepend(value) {
    let aNode = this.head;
    let newNode = new Node(value, aNode);
    this.head = newNode;
  }
  size() {
    let nodeIndex = this.head;
    let size = 0;
    while (nodeIndex != null) {
      nodeIndex = nodeIndex.nextNode;
      size++;
    }
    return size;
  }
  head() {
    return this.head;
  }
  tail() {
    let nodeIndex = this.head;
    while (nodeIndex != null) {
      if (nodeIndex.nextNode == null) {
        return nodeIndex;
      }
      nodeIndex = nodeIndex.nextNode;
    }
  }
  at(index) {
    let nodeIndex = this.head;
    for (let i = 0; i < index; i++) {
      nodeIndex = nodeIndex.nextNode;
    }
    return nodeIndex;
  }
  pop() {
    let nodeIndex = this.head;
    while (nodeIndex != null) {
      if (nodeIndex.nextNode.nextNode == null) {
        nodeIndex.nextNode = null;
      }
      nodeIndex = nodeIndex.nextNode;
    }
  }
  contains(value) {
    let nodeIndex = this.head;
    while (nodeIndex != null) {
      if (nodeIndex.value == value) {
        return true;
      }
      nodeIndex = nodeIndex.nextNode;
    }
    return false;
  }
  find(value) {
    let nodeIndex = this.head;
    let index = 0;
    while (nodeIndex != null) {
      if (nodeIndex.value == value) {
        return index;
      }
      nodeIndex = nodeIndex.nextNode;
      index++;
    }
    return null;
  }
  toString() {
    let linkedListString = "";
    let nodeIndex = this.head;
    while (nodeIndex != null) {
      linkedListString += " (" + nodeIndex.value + ") ->";
      nodeIndex = nodeIndex.nextNode;
    }
    linkedListString = linkedListString.slice(0, -3);
    return linkedListString;
  }
  insertAt(value, index) {
    let nodeIndex = this.head;
    if (index == 0) {
      this.prepend(value);
    } else {
      for (let i = 1; i <= index; i++) {
        if (i == index) {
          console.log("inside loop and if triggered inside it");
          let newNode = new Node(value);
          newNode.nextNode = nodeIndex.nextNode;
          nodeIndex.nextNode = newNode;
        }
        nodeIndex = nodeIndex.nextNode;
      }
    }
  }
  removeAt(index) {
    let nodeIndex = this.head;
    if (index == 0) {
      this.head = null;
    } else {
      for (let i = 1; i <= index; i++) {
        if (i == index) {
          let aNode = nodeIndex.nextNode.nextNode;
          nodeIndex.nextNode = aNode;
        }
        if (nodeIndex.nextNode != null) {
          nodeIndex = nodeIndex.nextNode;
        }
      }
    }
  }
}
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
let linkedList = new LinkedList(5);
linkedList.append(10); // append new node at end of linkedList
linkedList.append(12);
linkedList.append(14);

console.log(linkedList.toString()); // append
console.log("size: " + linkedList.size()); // size of linkedlist
console.log("head: " + linkedList.head.value); // head
console.log("tail: " + linkedList.tail().value); // tail
console.log("index 1: " + linkedList.at(1).value); // get node at index
linkedList.insertAt(2, 1); // insert new node with value at index : (data, index)
console.log(linkedList.toString());
