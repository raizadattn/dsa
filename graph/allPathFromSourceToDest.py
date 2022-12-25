# https://leetcode.com/problems/all-paths-from-source-to-target/submissions/864245175/

class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:

        n = len(graph)
        path = [0]
        ans = []
                    
        def dfs( node, path):
            if node == n-1:
                # print('o', path)
                ans.append( path.copy() )
                return

            for neighbour in graph[node]:
                path.append( neighbour )
                dfs( neighbour, path)
                path.pop()

            
        dfs( 0, path)

        return ans