const LinkedList = require('./LinkedList');

const myList = new LinkedList();
console.log('This is initialized:', myList);
myList.insertAtHead(10);
// myList.insertAtHead(20);

console.log('This is lista:', myList);
myList.insertAtHead(20);
console.log('This is lista:', myList);

myList.print();
