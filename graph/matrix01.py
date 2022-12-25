# https://leetcode.com/problems/01-matrix/
# bfs

class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        
        # bfs
        m = len(mat)
        n = len(mat[0])
        q = collections.deque()
        # visited = []
#         for i in range(0,m):
#             arr = []
#             for j in range(0,n):
#                 arr.append(0)
                
#             visited.append(arr)
            
        result = [[0 for i in range(n)] for j in range(m)]
        visited = [[0 for i in range(n)] for j in range(m)]
        for i in range(m):
            for j in range(n):
                if mat[i][j] == 0:
                    q.append((i,j, 0)) 
                    visited[i][j] = 1
                else:
                    visited[i][j] = 0

        while q:
            i, j, step = q.popleft()
            # print('result',result, i, j, step)
            result[i][j] = step
            for dx, dy in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                xx,yy = i+dx, j+dy

                if xx < 0 or xx == m or yy < 0 or yy == n:
                        continue
                
                if visited[xx][yy] == 1:
                    continue
                
                q.append((xx, yy, step + 1 ))
                visited[xx][yy] = 1
                
        return result
                    
                
        
            
        