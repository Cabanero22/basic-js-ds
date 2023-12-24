const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootElement = null;
  }

  root() {
    return this.rootElement;
  }

  add(data) {
    this.rootElement = addInside(this.rootElement, data);

    function addInside (node, data) {
     
      // Проверяем

      if (node === null) { // если узел отсутствует (null)
        return new Node (data);
      }

      if(node.data === data) {  // если узел есть
        return node
      }

      if (node.data > data) { // если текущее значении больше добавляемого
        node.left = addInside (node.left, data);
      } else {
        node.right = addInside (node.right, data);
      }
      return node; // возвращаем текущий узел;
    }
  }

  has(data) {
    return findInside (this.rootElement, data);

    function findInside (node, data) {
      if (node === null) {
        return false
      }

      if (node.data === data) {
        return true
      }

      let result;
      if (node.data > data) {
      result = findInside(node.left, data);
    } else{
      result = findInside(node.right, data)
    } 
      return result;
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};