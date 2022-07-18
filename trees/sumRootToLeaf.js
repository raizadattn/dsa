// https://leetcode.com/problems/sum-root-to-leaf-numbers/

var sumNumbers = function(root) {
    function solve(root, currentSum){
        if( root == null){
        return 0
        }
        currentSum = currentSum * 10 + root.val
        if(root.left == null && root.right == null){
            return currentSum
        }
        
        let leftNum =  solve(root.left, currentSum)
        let rightNum =  solve(root.right, currentSum)
        
        return leftNum + rightNum

    }
    return solve(root, 0)
    
};