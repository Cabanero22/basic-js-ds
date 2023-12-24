const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) { // Добавить элемент в конец стэка
    this.items.push(element);
  }

  pop() { // Удалить последний элемент из стэка
    return this.items.pop();
  }

  peek() { // Вернуть последний элемент стэка
    return this.items[this.items.length - 1];
  }
}

module.exports = {
  Stack
};
