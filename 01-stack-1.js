/* Stacks */

function Stack() {
  this.count = 0;
  this.storage = {};

  // Adds a value onto the end of the stack
  this.push = function(value) {
    this.storage[this.count++] = value;
  };

  // Removes and returns the value at the end of the stack
  this.pop = function() {
    const last = this.peek();
    if (this.count > 0) delete this.storage[this.count--];
    return last;
  };

  this.size = function() {
    return this.count;
  };

  // Returns the value at the end of the stack
  this.peek = function() {
    return this.storage[this.count - 1] || 'Stack is empty';
  };
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);

console.log(myStack.peek()); // 2
console.log(myStack.pop()); // 2
console.log(myStack.peek()); // 1

myStack.push('node.js');

console.log(myStack.size()); // 2
console.log(myStack.peek()); // node.js
console.log(myStack.pop()); // node.js
console.log(myStack.peek()); // 1
