# https://leetcode.com/problems/path-with-maximum-probability/submissions/865312109/
class Solution:
    def maxProbability(self, n: int, edges: List[List[int]], succProb: List[float], start: int, end: int) -> float:

        graph = defaultdict( list )
        for i in range(len(edges)):
            x, y = edges[i]
            prob = succProb[i]
            graph[x].append( (y, prob) )
            graph[y].append( (x, prob) )
        probability = [0]*n
        probability[start] = -1 
        pq = [(-1,start)]
        # print('graph', graph)
        while pq:
            prevProb, node = heappop( pq )
                
            for neighbour, prob in graph[node]:
                # print('neighbour, prob',neighbour, prob)
                newProb = prevProb * prob
                # print('hi', neighbour, probability, newProb, "=", prevProb ,'*', prob )
                if newProb < probability[neighbour]:
                    probability[ neighbour ] = newProb
                    heappush( pq, ( newProb, neighbour ) )
        print('probability', probability)
        return -probability[end]