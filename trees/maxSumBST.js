// https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/submissions/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 var maxSumBST = function(root, min, max, size, sum ) {
    let sumAns = 0
    let sizeAns = 0
function solve(root){
    
    if(!root){
        return { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY, size:0, sum:0, isBST:true }
         // { min, max, size, sum, isBST }
    }
    // console.log('solve',root.val)
    let curr = {}
    
    let isLeftBst = solve(root.left)
    let isRightBst = solve(root.right)
    // console.log('back',root.val, root)
    // console.log( 'leftbst ===== ',isLeftBst)
    // console.log( 'RightBST ---- ',isRightBst)
    // console.log('glovbal',sumAns)
    curr.min = Math.min(isLeftBst.min, root.val)
    curr.max = Math.max(isRightBst.max, root.val)
    

    curr.sum = isLeftBst.sum + isRightBst.sum + root.val
    curr.size = isLeftBst.size + isRightBst.size + 1
    if( isLeftBst.isBST && isRightBst.isBST && ( root.val < isRightBst.min && root.val > isLeftBst.max ) ){
        
        sumAns = Math.max( sumAns , curr.sum )
        sizeAns = Math.max( sizeAns , curr.size )
        curr.isBST = true
        // console.log('IN----',root.val,sizeAns,sumAns)
        // console.log('left SUm', isLeftBst.sum +'  right SUm  '+ isRightBst.sum)
        
       }else{
        curr.isBST = false

       }
    return curr
}


let ans = solve(root)
console.log('ans',ans, sumAns, sizeAns)

// return ans.sum
return sumAns
};