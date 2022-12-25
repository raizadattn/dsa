//two sorted

var mergeTwoLists = function(list1, list2) {
    let i = list1
    let j = list2
    let newHead = new ListNode(-1)
    let temp = newHead
    while( i && j ){
        if( i.val < j.val ){
              temp.next = i
              i = i.next
              
          }else{
              temp.next = j
              j = j.next
              
          }
        temp = temp.next
    }
    if(i){
        temp.next = i
    }
    if(j){
        temp.next = j
        
    }

    return newHead.next
};