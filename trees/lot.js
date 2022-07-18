var levelOrder = function(root) {
    let queue= []
    let result = []
    if(!root){
        return []
    }
    // console.log('root',root,root.left,root.right, '--->>>',root.val)
    queue.push(root)
    
    
    while(queue.length>0){
        
        let res = []
        
        
        // console.log('--Q---',queue,queue.length,typeof queue)
        let len = queue.length
        for( let i=0; i< len ; i++){
                    // console.log('pushing',queue[i].val)
            
                    let node = queue.shift(0)
                    // console.log('node',node, node.val, queue, typeof node, typeof queue)
                    // res.push(queue[i].val)
                    // console.log('pushing',node.val)
                    res.push( node.val )
                    if(node.left){
                        queue.push(node.left)
                       }
                    if(node.right){            
                        queue.push(node.right)
                    }
                    // console.log('level',res)

                    
        }
                    result.push([...res])
                    // console.log('result',result)
                    // console.log('new Q--',queue)
        
    }
    return result
    
};