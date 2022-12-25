q = []
class Queue:
    def __init__(self):
        self.q = []
    def push(self, element):
        self.q.append(element)
    def pop(self):
        front = self.q.pop(0)
        return "popped element is "+str(front)
    def front(self):
        return 'front is '+str(self.q[0])
q = Queue()
q.push(2)
q.push(4)
q.push(3)
q.push(6)
print(q.q)
print(q.pop())
print(q.q)
print(q.front())


from collections import deque
  
# Initializing a queue
q = deque()
  
# Adding elements to a queue
q.append('a')
q.append('b')
q.append('c')
  
print("Initial queue")
print(q)
print("Size queue")
print(len(q))
  
# Removing elements from a queue
print("\nElements dequeued from the queue")
print(q.popleft())
print(q.popleft())
print(q.popleft())
print("Size queue")
print(len(q))
  
print("\nQueue after removing elements")
print(q)
  