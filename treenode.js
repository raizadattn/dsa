
function binarySearchTree() {
  this.getRootNode = function () {
    console.log("calling getRootNode");
    return root;
  };
  const Node = function (val) {
    console.log("INSIDE Node", val);
    (this.val = val), (this.left = null), (this.right = null);
  };

  let root = null;
 

  const insertNode = function (node, newNode) {
    console.log("insertNode");
    if (node.val < newNode.val) {
      if (node.right) {
        insertNode(node.right, newNode);
      } else {
        node.right = newNode;
      }
    }
    if (node.val > newNode.val) {
      if (node.left) {
        insertNode(node.left, newNode);
      } else {
        node.left = newNode;
      }
    }
  };

  this.insert = function (value) {
    console.log("inside insert", value);
    let newNode = new Node(value);
    console.log(newNode.val)
    if (root === null) {
      root = newNode;
      console.log("root", root.val);
    } else {
      console.log("else root", root.val);
      insertNode(root, newNode);
    }
  };
}

let bst = new binarySearchTree();
console.log("type", typeof bst);
bst.insert(5);
bst.insert(3);
bst.insert(6);
bst.insert(4);

let root1 = bst.getRootNode();
console.log('EXIT ROOT',root1.val);
function inOrder(node){
    let result = []
    function dfs(node){
      if( !node){
        return
      }
      dfs(node.left)
      result.push(node.val)
      dfs(node.right)
    }
    dfs(node)
  return result
}
let ans  = inOrder(root1)
console.log('ans ',ans)
