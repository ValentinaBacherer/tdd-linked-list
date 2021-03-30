class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  insertAtIndex(index, value) {
    if (index === 0) {
      return this.insertAtHead(value);
    }
    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;
    prev.next = new LinkedListNode(value, prev.next);
    this.length++
  }

  print() {
    let output = '';
    let current = this.head;
    while (current) {
      output = `${output}${current.value} -> `;
      current = current.next;
    }
    console.log(`${output}null`);
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

//helper funcion for test
LinkedList.fromValues = (...values) => {
  const ll = new LinkedList();
  // in reverse so the array matches the list
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};

module.exports = LinkedList;
