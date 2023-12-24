const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootElement = null; // начальное значение (так как корень отсутствует)
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
    } else {
      result = findInside(node.right, data)
    }
      return result;
    }
  }

  find(data) {
    return findInside (this.rootElement, data);

    function findInside (node, data) {
      if (node === null) {
        return node; // меняем возврат булевого на возврат узла, если такой есть
      }

      if (node.data === data) {
        return node; // меняем возврат булевого на возврат узла, если такой есть
      }

      let result;
      if (node.data > data) {
      result = findInside(node.left, data);
    } else {
      result = findInside(node.right, data)
    }
      return result;
    }
  }

  remove(data) {
    this.rootElement = removeNode(this.rootElement, data);

    function removeNode (node, data) {
      if (node === null) return null; // проверяем на наличие узла

      if(node.data > data) {
        node.left = removeNode (node.left, data); // обновляем левое поддерево
        return node; // возвращаем его
      } else if (node.data < data) {
        node.right = removeNode(node.right, data); // обновляем правое поддерево
        return node
      } else if (node.data === data) {  // если равно тому что находится в узле

            if (node.left === null && node.right === null) { // проверка на отсутстве потомков
              return null // то удаляем и возвращаем null
            }

            if(node.left === null) { // если нет только левого поддерева
              node = node.right; // то кладем вместо него правое
              return node;
            }

            if(node.left === null) { // если нет только правого поддерева
              node = node.left; // то кладем вместо него правое
              return node;
            }

            let minFromRightTree = node.right; //берем минимум среди правого поддерева и начинаем с корня правого
            while (minFromRightTree.left) { // идем до тех пор пока эл. слева есть
              minFromRightTree = minFromRightTree.left;
            }
            node.data = minFromRightTree.data;
            node.right = removeNode(node.right, minFromRightTree.data)
            
            return node;
      }
    }
  }

  min() {
    if (this.rootElement === null) {
      return;
     }
  
     let node = this.rootElement;
     while (node.left) {
      node = node.left;
     }
     return node.data;
  }

  max() {
    if (this.rootElement === null) {
      return;
     }
  
     let node = this.rootElement;
     while (node.right) {
      node = node.right;
     }
     
     return node.data;
  }
}

module.exports = {
  BinarySearchTree
};