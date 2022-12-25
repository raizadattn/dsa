# https://leetcode.com/problems/path-with-minimum-effort/description/
import math
class Solution:
    def minimumEffortPath(self, heights: List[List[int]]) -> int:
        row = len(heights)
        col = len(heights[0])
        pq = [(0,0,0)] # distance, row, col
        distance = [[ math.inf ] * col for _ in range(row)]
        distance[0][0] = 0
        directions = [ (-1,0), (1,0), (0,1), (0,-1) ] # left, right ,up, down

        while pq:
            difference, x, y = heappop(pq)
            if x==row-1 and y==col-1:
                return difference
            for direction in directions:
                addX, addY = direction
                newX, newY = x+addX , y+addY

                if newX>=0 and newY>=0 and newX< row and newY<col:
                    newEffort = max( abs(heights[x][y] - heights[newX][newY]), difference)
                    if newEffort < distance[newX][newY]:
                        distance[newX][newY] = newEffort
                        heappush(pq, (newEffort, newX, newY ) )
                
        
        return 0
