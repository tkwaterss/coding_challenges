class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor(head = null, size = 0) {
    this.head = head;
    this.size = size;
  }
  addNodeAtHead(value) {
    this.head = new Node(value, this.head);
    this.size++;
    return;
  }
  addNodeAtTail(value) {
    if (!this.head) return this.addNodeAtHead(value);
    const node = new Node(value)
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.size++;
    return;
  }
  addNodeAtIndex(value, index) {
    if (index === 0) return this.addNodeAtHead(value);
    if (index > 0 && index > this.size) return console.log("Index does not exist");
    const node = new Node(value);
    let current = this.head;
    let previous;
    let count = 0;
    while (count < index) {
      previous = current
      current = current.next
      count++;
    }
    previous.next = node;
    node.next = current;
    this.size++;
    return;
  }
  removeNodeAtHead() {
    if (!this.head) return console.log("list is already empty");
    this.head = this.head.next;
    this.size--;
  }
  removeNodeAtTail() {
    if (!this.head) return console.log("list is already empty");
    if (!this.head.next) return this.removeNodeAtHead();
    let current = this.head;
    let previous;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    this.size--;
    return;
  }
  removeNodeAtIndex(index) {
    if (index > 0 && index > this.size || !this.head) return console.log("Index does not exist");
    if (index === 0) return this.removeNodeAtHead();
    let current = this.head;
    let previous;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.next;
      count ++;
    }
    previous.next = current.next;
    this.size--;
    return;
  }
  clearList() {
    this.head = null;
    this.size = 0;
  }
  printList() {
    if (!this.head) return console.log("List is empty");
    let current = this.head;
    let count = 1;
    while (current) {
      console.log(`${count}. ` + current.value);
      current = current.next;
      count++;
    }
    return;
  }
  printNodeAtIndex(index) {
    if (!this.head) return console.log("List is empty");
    if (index > 0 && index > this.size) return console.log("Index does not exist");
    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count ++;
    }
    console.log(`The value at Index ${index} is: ` + current.value);
    return;
  }
  updateNodeAtIndex(value, index) {
    if (!this.head) return console.log("List is empty");
    if (index > 0 && index > this.size) return console.log("Index does not exist")
    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }
    current.value = value;
    return;
  }
}

let myList = new LinkedList();

myList.addNodeAtHead(10);
myList.addNodeAtTail(1);
myList.addNodeAtTail(9);
myList.addNodeAtTail(3);
myList.addNodeAtTail(7);
myList.addNodeAtIndex('New String', 1);
myList.removeNodeAtHead();
myList.removeNodeAtTail();
myList.removeNodeAtIndex(2);
myList.printNodeAtIndex(1);
myList.updateNodeAtIndex("New Value", 1);
myList.printNodeAtIndex(1);

myList.printList();


