# step1: find topo sort using DFs
# step2: transpose graph
# step3: dfs again to count strongly connected components
from collections import defaultdict

class Graph:

    def __init__(self, V):
        self.V = V
        self.graph = defaultdict(list)
        

    def addEdge(self, u,v):
        # self.graph[u].append([v,wt])
        self.graph[u].append(v)


    # dfs to get toposort ordering
    def dfsToposort(self, node, visited, stack):
        visited[node] = True
        for i in self.graph[node]:
            if( not visited[i]):
                self.dfsToposort(i, visited, stack)
        stack = stack.append(node)
        
    def transposeGraph(self):
        newGraph = Graph(self.V)
        for i in self.graph:
            for node in self.graph[i]:
                newGraph.addEdge(node, i)
        return newGraph

    def dfs(self, node, isVisited):
        isVisited[node] = True
        for i in self.graph[node]:
            if not isVisited[i]:
                self.dfs( i, isVisited )

    def kosaraju(self):
        visited = [False]*self.V
        stack = []
        for i in range(self.V):
            if( not visited[i] ):
                self.dfsToposort(i, visited , stack)
        
        print('toposort fetched is ', stack)

        #step 2
        newGraph = self.transposeGraph()
        print('new tranposed graph', newGraph.graph)

        #step 3
        # run dfs again to find SCC
        isVisited = [False]*self.V
        count = 0
        # for i in stack:
        while(stack):
            node = stack.pop()
            if not isVisited[node]:
                newGraph.dfs(node, isVisited)
                count+=1
        print('Final count : ', count)
        

g = Graph(5)
g.addEdge(1, 0)
g.addEdge(0, 2)
g.addEdge(2, 1)
g.addEdge(0, 3)
g.addEdge(3, 4)
g.kosaraju()