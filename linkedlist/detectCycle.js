var detectCycle = function(head) {
    let slow = head
    let fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if(slow == fast){
            // start from head and the slow and fast meeting point, where they will meet is the starting point of the cycle
        
            let temp1 = slow
            let temp2 = head
            while(temp1 != temp2){
                temp1 = temp1.next
                temp2 = temp2.next
                
            }
            return temp1
        }
    }
    return null
    
};