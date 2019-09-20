/* Queues */

function Queue() {
  // collection will hold the queue
  const collection = [];

  // this method prints queue elements
  this.print = function() {
    console.log(collection);
  };

  // this method will push element to queue
  this.enqueue = function(element) {
    collection.push(element);
  };

  // this method will remove element from queue
  this.dequeue = function() {
    collection.shift();
  };

  // this method will return the first element in queue
  this.front = function() {
    return collection[0] || 'Queue is empty';
  };

  // this method will return the size of the queue
  this.size = function() {
    return collection.length;
  };

  // this method will return true value if queue has no elements
  this.isEmpty = function() {
    return collection.length === 0;
  };
}

const q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');

q.print(); // [ 'a', 'b', 'c' ]
q.dequeue();

console.log(q.front()); // b

q.print(); // [ 'b', 'c' ]
