var reverseKGroup = function(head, k) {
        
    function solve(head){
        if( head == null ){
           return head
           }
        
        // nextNode = reverse(head,k)
        let curr = head
        let prev = null
        let nextNode = null
        
        let t1 = head
        let count = 0
        let i = 0
        while( count<k ){
            if(!t1){
                return head
            }
              t1 = t1.next
              count++
              }
        
        while( curr && i<k ){
            // console.log('curr',head)
            nextNode = curr.next
            curr.next = prev
            prev = curr
            curr = nextNode
            i++
              }
        // console.log('prev',prev)
        if(nextNode){
            head.next = solve(nextNode)
            console.log('head',head)
        }

        return prev
        
    }
    // reverse(head)
    // console.log('t1',head)
    let res =  solve(head)
    
    // console.log('t2',head)
    return res
    
    
};