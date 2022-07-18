var minDepth = function(root) {
    
    
    let findHeight  = (root) =>{
        if(!root){
        return 0
    }
        // console.log(root)
        return 1+Math.min( findHeight(root.left) , findHeight(root.right))
    }
    let ans =  findHeight(root)
    console.log('ans',ans)
    return ans
};