# Definition for singly-linked list.
# https://leetcode.com/problems/merge-k-sorted-lists/submissions/
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
import heapq
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        merge = ListNode()
        temp = merge
        # lists = [[1,4,5],[1,3,4],[2,6]]
        heap = []
        for i in range(len(lists)):
            if lists[i]:
                # print('as',lists[i].val , i)
                heapq.heappush(heap , ( lists[i].val , i ) )  
        print(heap)
        while(heap):
            
            min = heapq.heappop(heap)
            # print('min',min)
            smallest,i = min
            # print('----------', min, smallest,i )

            newNode = ListNode(smallest,None)
            temp.next = newNode
            temp = temp.next
            if( lists[i].next is not None):
                # print('inserting',lists[i].next.val)
                heapq.heappush(heap, ( lists[i].next.val , i ) )
                lists[i] = lists[i].next
        print(heap)
        # print('merge',merge)
        return merge.next
