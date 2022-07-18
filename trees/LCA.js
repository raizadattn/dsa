//Lowerst common ancestor LC

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/submissions/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    
    
    function solve( root ){ 
        // console.log('solve',root)
        if( root == null ){
           return null
        }
        if( root === p || root === q){
            return  root
            }

        let leftAns = solve(root.left)
        // console.log('---------',root.val, ' leftAns*** ',leftAns)
        let rightAns = solve(root.right)
        // console.log('---------',root.val, ' rightAns*** ',rightAns)
        

        if( leftAns==null && rightAns ==null){
            return null
        }
        if( leftAns && rightAns){
            return root
        }
        if( leftAns == null ){
            return rightAns
        }
        if( rightAns == null){
            return leftAns
        }
        
        
        
    }
    let ans=  solve(root)
    // console.log('ans', ans)
    return ans
        
    
};