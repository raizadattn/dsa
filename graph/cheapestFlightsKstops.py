# https://leetcode.com/problems/cheapest-flights-within-k-stops/

class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
 
        # graph = { i:[] for i in range(len(flights)) }
        graph = collections.defaultdict(list)
        for i in range( len(flights)):
            graph[flights[i][0]].append( ( flights[i][1], flights[i][2] ) )

        distanceArr = [float('inf')]*n
        distanceArr[src] = 0

        q = deque()
        q.append((0 ,(src, 0) ))

        while q:
            stops, second = q.popleft()
            node, distance = second

            if stops > k:
                continue
            for neighbour in graph[node]:
                adjNode, ditanceToAdjNode = neighbour
                # print('from ', node, 'curr distnce', distance, 'neighbour', adjNode, 'and distanceArr', distanceArr)
                if distance + ditanceToAdjNode < distanceArr[adjNode] and stops <= k:
                    distanceArr[adjNode] = distance + ditanceToAdjNode
                    # print('distanceArr updated', distanceArr)
                    q.append( (stops+1, (adjNode, distanceArr[adjNode]) ))
                
        # print('distncearr', distanceArr)
        if distanceArr[dst] == float('inf'):
            return -1
        else:
            return distanceArr[dst]