
from collections import defaultdict
class Graph:

    def __init__(self, V):
        self.V = V
        self.graph = defaultdict(list)
        

    def addEdge(self, u,v,wt):
        self.graph[u].append([v,wt])
        # self.graph[u].append(v)


    def BellmanFord(self, source):
        distance = [float('inf')]*self.V
        distance[source] = 0

        #loop over edges
        for source, adjList in self.graph.items():
            for node, wt in adjList:
                if distance[source] + wt < distance[node]:
                    distance[node] = distance[source] + wt
        negativeCyclePresent = False

        for source, adjList in self.graph.items():
            for node, wt in adjList:
                if distance[source] + wt < distance[node]:
                    # distance[node] = distance[source] + wt
                    negativeCyclePresent = True
                    break

        print('negativeCyclePresent',negativeCyclePresent)

        print('distance', distance)


g = Graph(5)
g.addEdge(0, 1, -1)
g.addEdge(0, 2, 4)
g.addEdge(1, 2, 3)
g.addEdge(1, 3, 2)
g.addEdge(1, 4, 2)
g.addEdge(3, 2, 5)
g.addEdge(3, 1, 1)
g.addEdge(4, 3, -3)
 
# Print the solution
g.BellmanFord(0)