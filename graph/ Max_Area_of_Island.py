# https://leetcode.com/problems/max-area-of-island/

class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        areas = []
        for m in range(len(grid)):
            for n in range( len(grid[0])):
                islandArea = self.dfs(grid, m, n)
                areas.append(islandArea)
        return max(areas)
    def dfs(self, grid, m, n):
        if( m<0 or n<0 or m>len(grid)-1 or  n>len(grid[0])-1 or grid[m][n] == 0 ):
            return 0
        grid[m][n] = 0
        leftArea = self.dfs(grid, m-1, n)
        rightArea = self.dfs(grid, m+1, n)
        lowerArea = self.dfs(grid, m, n-1)
        upperArea = self.dfs(grid, m, n+1)
        
        return 1 + leftArea + rightArea + lowerArea + upperArea
        