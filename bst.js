const BinarySearchTree = function () {
  const Node = function (key) {
    (this.key = key), (this.left = null), (this.right = null);
  };

  let root = null;

  let insertNode = function (node, newNode) {
    console.log('insertNode');
    //If new value is less than the current
    if (newNode.key < node.key) {
      //If left is empty
      if (node.left === null) {
        node.left = newNode;
      } else {
        //Check for descendants
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        //If right is empty
        node.right = newNode;
      } else {
        //Check for descendants
        insertNode(node.right, newNode);
      }
    }
  };

  this.insert = function (key) {
    console.log("insert", key);
    let newNode = new Node(key);
    //If no root then add at root
    if (root == null) {
      root = newNode;
      console.log("root", root.key);
    } else {
      //Find the appropriate place to insert the new node
      console.log("else root", root.key);

      insertNode(root, newNode);
    }
  };
};
const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
