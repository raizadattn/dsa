# mark all nodes as unvisited first 
# mark all nodes with inf distance initially except source node 
# Repeat the following for V-1 times
#     - pick the min value node which is unprocessed  
#     - mark the node as processed 
#     - update the adjacent vertices  if cost[u]+wt(u,v) < cost[v] else skip

# https://leetcode.com/discuss/general-discussion/1059477/A-noob%27s-guide-to-Djikstra%27s-Algorithm

from collections import defaultdict
import heapq
import sys

class Graph:

    def __init__(self, V):
        self.verticeCount = V
        self.graph = defaultdict(list)
        

    def addEdge(self, u,v, wt):
        self.graph[u].append([v,wt])
        self.graph[v].append([u,wt])

    def dijkastra(self,source):
        # visited = []
        verticeCount = self.verticeCount
        distance = [sys.maxsize]*verticeCount
        distance[source] = 0
        pq = []  # priority queue
        heapq.heappush(pq,  (0, source ) )
        while( len(pq)>0 ):
            print( 'PQ--------------',pq)
            nodeDistance, node = heapq.heappop(pq)
            print('extract mim distance - nodeDistance, node', nodeDistance, node )
            for adjNode,wt in self.graph[node]:
                if( distance[node] + wt < distance[adjNode] ):
                    distance[adjNode] = distance[node] + wt
                    heapq.heappush(pq, (distance[adjNode], adjNode) )

        print('final distance', distance)
# graph = Graph(9)
# graph.addEdge(0, 1, 4)
# graph.addEdge(0, 7, 8)
# graph.addEdge(1, 2, 8)
# graph.addEdge(1, 7, 11)
# graph.addEdge(2, 3, 7)
# graph.addEdge(2, 8, 2)
# graph.addEdge(2, 5, 4)
# graph.addEdge(3, 4, 9)
# graph.addEdge(3, 5, 14)
# graph.addEdge(4, 5, 10)
# graph.addEdge(5, 6, 2)
# graph.addEdge(6, 7, 1)
# graph.addEdge(6, 8, 6)
# graph.addEdge(7, 8, 7)
# graph.dijkastra(0)

graph = Graph(6)
graph.addEdge(1, 2, 2)
graph.addEdge(1, 4, 1)
graph.addEdge(2, 5, 5)
graph.addEdge(2, 3, 4)
graph.addEdge(4, 3, 3)
graph.addEdge(5, 3, 1)
graph.dijkastra(1)