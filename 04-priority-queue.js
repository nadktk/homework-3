function PriorityQueue() {
  // collection will hold the queue
  const collection = [];

  // this method prints queue elements
  this.print = function() {
    console.log(collection);
  };

  // this method will push element to queue
  this.enqueue = function(element) {
    let i = 0;
    while (collection[i] && collection[i][1] >= element[1]) i++;
    collection.splice(i, 0, element);
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

const pq = new PriorityQueue();
pq.enqueue(['Intern 1', 2]);
pq.enqueue(['Intern 2', 3]);
pq.enqueue(['Intern 3', 1]);
pq.enqueue(['Intern 4', 2]);

pq.print(); // [['Intern 2', 3], ['Intern 1', 2], ['Intern 4', 2], ['Intern 3', 1]]

pq.dequeue();

console.log(pq.front()); // [ 'Intern 1', 2 ]
pq.print(); // ['Intern 1', 2], ['Intern 4', 2], ['Intern 3', 1]

// priorities: 3 - highest, 1 - lowest
