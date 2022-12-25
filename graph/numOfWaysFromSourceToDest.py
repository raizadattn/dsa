# https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/submissions/864715921/

class Solution:
    def countPaths(self, n: int, roads: List[List[int]]) -> int:

        graph = defaultdict(list)
        for x,y,z in roads:
            graph[x].append( (y, z) )
            graph[y].append( (x, z) )

        print('gr', graph)
        
        distance = [float(inf)]*n
        distance[0] = 0
        pq = [(0,0)]
        freq = [0]*n
        freq[0] = 1

        mod = int(1e9 + 7)

        while pq:
            dist, node = heappop( pq )

            for neighbour, adjDist in graph[node]:

                if adjDist + dist < distance[neighbour]:
                    freq[neighbour] = freq[node]
                    distance[neighbour] = adjDist + dist
                    heappush( pq, ( distance[neighbour] , neighbour ) )
                
                elif adjDist + dist == distance[neighbour]:
                    freq[neighbour] = freq[node] + freq[neighbour]
                else:
                    continue

                
        # print('dist', freq)
        return freq[n-1] % ( mod )