var binaryTreePaths = function(root) {
    
    let result = []
    
    function solve(root,path){

        if(root===null){
            return
        }
        if(root.left === null && root.right === null){
            path = path + root.val
            result.push(path)
            return
        }

        solve(root.left, path + root.val+ '->')
        solve(root.right, path + root.val+ '->')

    }
    
    solve(root, "")
    return result
};