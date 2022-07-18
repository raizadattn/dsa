class Node{
    constructor(val){
        this.val = val
        this.left = null;
        this.right = null;
    }

}

function printTree(root){
    if(root === null){
        return
    }
    printTree(root.left)
    console.log(root.val)
    printTree(root.right)
}


let root = new Node(1);
root.left = new Node(3);
root.left.left = new Node(2);
root.left.right = new Node(1);
root.left.right.left = new Node(1);
root.right = new Node(-1);
root.right.left = new Node(4);
root.right.left.left = new Node(1);
root.right.left.right = new Node(2);
root.right.right = new Node(5);
root.right.right.right = new Node(2);

printTree(root)