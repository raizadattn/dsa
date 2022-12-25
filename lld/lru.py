class Node:
    def __init__(self, key, val ):
        self.key, self.val = key, val
        self.prev = self.next = None

class LRUCache:

    def __init__(self, capacity: int):
        self.size = capacity
        self.cache = {} # mapped to a node
        self.head = Node(0,0)
        self.tail = Node(0,0)
        self.head.next , self.tail.prev = self.tail, self.head 

    def get(self, key: int) -> int:
        # print('get cache', self.cache, key)
        if key in self.cache:
            # print('old self.head', self.head.next.val)
            # print('old self.tail.prev', self.tail.prev.val)
            self.delete( self.cache[key] )
            self.push( self.cache[key] )
            # print('self.head', self.head.next.val)
            # print('self.tail.prev', self.tail.prev.val)
            return self.cache[key].val
        else:
            return -1

        
    def put(self, key: int, value: int) -> None:
        # print('put cache', self.cache, key, value)

        newNode = Node( key, value )

        if key in self.cache:
            self.delete( self.cache[key] )

        # print(' put head', self.head.next.val)     
        # print(' put tail', self.tail.prev.val)   
        self.cache[key] = newNode
        self.push( self.cache[key] )  
        # print('first cacche', self.cache) 
  
        if len(self.cache) > self.size:
            leastRecentNode = self.tail.prev
            self.delete( leastRecentNode )
            del self.cache[leastRecentNode.key]
            # print('deleting from cache self.tail.prev.key', self.tail.prev.key)
            # print('second cacche', self.cache)  
            # print(' put new head', self.head.next.val)     
            # print(' put new tail', self.tail.prev.val)     


    def delete( self, node ):
        node.prev.next = node.next
        node.next.prev = node.prev

    def push( self, node ):
        nxt, prev = self.head.next, self.head
        prev.next = nxt.prev = node
        node.next, node.prev = nxt, prev

        # node.next = self.head.next
        # node.prev = self.head
        # # self.head.next.prev = node
        # self.head.next = node
        # node.next.prev = node

        


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)