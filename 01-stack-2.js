/* Stacks */

// just a shorter version of Stack class, it provides the same functionality
class Stack {
  constructor() {
    const stack = [];

    // Adds a value onto the end of the stack
    this.push = value => stack.push(value);

    // Removes and returns the value at the end of the stack
    this.pop = () => stack.pop();

    // Returns the size of the stack
    this.size = () => stack.length;

    // Returns the value at the end of the stack
    this.peek = () => stack[stack.length - 1] || 'Stack is empty';
  }
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
