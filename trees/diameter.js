var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0
    
    //check left height and right height + 1 of every node in the tree
    let dfs = (root) => {
        if(!root){
            return 0
        }
        let lh = dfs(root.left)
        let rh = dfs(root.right)
        maxDiameter = Math.max(lh+rh, maxDiameter)
        return  1 + Math.max( lh, rh)
        
    }
    
    dfs(root)
    return maxDiameter
    
};