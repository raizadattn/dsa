// this is the correct approach
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

let count = 0
function printPath(paths, i){
    let ans = ''
    console.log('--------')
    for(j=i;j<paths.length;j++){
        // ans =ans +paths[j]
        console.log(paths[j])
    }
    count++
    console.log('--------')

}

function kSumPath(root,k, paths){
    if(root == null){
        return
    }
    
    paths.push(root.val)
    let total = 0
    console.log('a')
    for(let i=paths.length-1; i>=0; i--){
    console.log('b')

        total = total + paths[i]
        if( total === k ){
            printPath(paths, i)
        }
    }
    kSumPath(root.left, k, paths)
    kSumPath(root.right, k, paths)

    paths.pop()
}
let k = 5
kSumPath(root,k,[])
console.log('c',count)