//love B
function height(root){
    if(!root){
        return 0
    }
    return 1 + Math.max( height(root.left), height(root.right) )
}
var isBalanced = function(root){

    
    
    if(!root){
        return true
    }
    let isLeftBalanced = isBalanced(root.left)
    let isRightBalanced = isBalanced(root.right)

    return isLeftBalanced && isRightBalanced && ( Math.abs( height(root.left) - height(root.right) ) <= 0 )

}


//leetcode soln
// var isBalanced = function(root) {
//     let f = true
//         function getHeight(root){
//         if(!root){
//             return 0
//         }
//             let lh = getHeight(root.left)
//             let rh = getHeight(root.right)                         
//             if( Math.abs(lh -rh) > 1){
//                f= false
//                }
//         return 1 + Math.max(lh ,rh )
            
//         }

//     getHeight(root)
//     return f

    
// };