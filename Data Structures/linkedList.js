//^Medium Functional LinkedList
const Node = function (value, next = null) {
  this.value = value;
  this.next = next;
};
const LinkedList = function () {
  this.head = null;
  this.size = 0;
};
LinkedList.prototype.addNodeAtHead = function (value) {
  this.head = new Node(value, this.head);
  this.size++;
  return;
};
LinkedList.prototype.addNodeAtTail = function (value) {
  let node = new Node(value);
  if (!this.head) return this.addNodeAtHead(value);
  let current = this.head;
  while (current.next) {
    current = current.next;
  }
  current.next = node;
  this.size++;
  return;
};
LinkedList.prototype.addNodeAtIndex = function (value, index) {
  if (index > 0 && index > this.size)
    return console.log("Index does not exist");
  if (index === 0) return this.addNodeAtHead(value);
  const node = new Node(value);
  let current = this.head;
  let count = 0;
  let previous;
  while (count < index) {
    count++;
    previous = current;
    current = current.next;
  }
  previous.next = node;
  node.next = current;
  this.size++;
  return;
};
LinkedList.prototype.nodeAtIndex = function (index) {
  if ((index > 0 && index > this.size) || !this.head)
    return console.log("Index does not exist");
  let count = 0;
  let current = this.head;
  while (current) {
    if (count === index) return console.log(current.value);
    count++;
    current = current.next;
  }
  return null;
};
LinkedList.prototype.removeHeadNode = function () {
  if (!this.head) return console.log("There is no head");
  this.head = this.head.next;
  this.size--;
  return;
};
LinkedList.prototype.removeTailNode = function () {
  if (!this.head) return console.log("There is no list");
  if (!this.head.next) return this.removeHeadNode();
  let current = this.head
  let previous
  while (current.next) {
    previous = current;
    current = current.next
  }
  previous.next = null;
  this.size--;
  return;
}
LinkedList.prototype.removeAtIndex = function (index) {
  if (!this.head) return console.log('There is no list');
  if (index > 0 && index > this.size) return console.log('This index does not exist');
  if (index === 0) return this.removeHeadNode();
  let current = this.head;
  let previous;
  let count = 0;
  while (count < index) {
    previous = current;
    current = current.next;
    count++;
  }
  previous.next = current.next;
  this.size--;
  return;
};
LinkedList.prototype.clear = function () {
  this.head = null;
  this.size = 0;
  return;
}
LinkedList.prototype.printList = function () {
  let current = this.head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

const list = new LinkedList();
list.addNodeAtHead(1);
list.addNodeAtHead(2);
list.addNodeAtTail(8);
list.addNodeAtIndex(3, 1);
// console.log(list);

// list.nodeAtIndex(1);
list.removeHeadNode();
// list.removeTailNode();
list.removeAtIndex(0);
list.printList();
