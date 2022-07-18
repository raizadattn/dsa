class Node{
    constructor(d){
        this.data = d
        this.left = null;
        this.right = null;
    }
}
function buildTree(){
    console.log('building')
    let stdin = '';
    process.stdin.on("data", function (input) {
        stdin += input;
        process.exit()
      });
     if(stdin == -1 ){
         return null
     }
     let newNode = new Node(stdin)
     newNode.left = buildTree()
     newNode.right = buildTree()
     return newNode
}

let newNode = new Node(5)
// newNode.left = buildTree() 
// newNode.right = buildTree() 

// function ip(){
//     process.stdin.on("data", function (input) {
//         stdin += input;
//         process.exit()
//       });
// }
// function main(n){
//     console.log('main',n)
//     if(n==5){
//         return
//     }
//     let stdin = '';
//     main(n+1)
//     process.stdin.on("data", function (input) {
//         stdin += input;
//         process.exit()
//       });
//     // ip.then()
// }
// main(0)
// process.stdin.read(el=>console.log('insert root node')