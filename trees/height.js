function height(root){
    if(!root){
        return 0
    }
    //remove this condition if we want to return maximum number of nodes in a path
    if(!root.left && !root.right){
        return 0
    }
    let leftHeight = height(root.left)
    let rightHeight = height(root.right)
    return 1+ Math.max(leftHeight,rightHeight)
}


//leetcode solution
// var maxDepth = function(root) {
    
//     function getHeight(root){
//         if(!root){
//             return 0
//         }
//         return 1+ Math.max(getHeight(root.left) ,getHeight(root.right) )
//     }
//     return getHeight(root);
// };