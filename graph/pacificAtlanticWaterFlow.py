class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        p_visited = set()
        a_visited = set()

        rows = len(heights)
        cols = len(heights[0])
        
        def traverse( coordinates, visited ):
            # x ,y = coordinates
            directions = [ (1,0),(0,1),(-1,0),(0,-1) ]
            
            if coordinates not in visited:
                visited.add( coordinates )
                for direction in directions:
                    newX , newY = direction
                    x,y = coordinates
                    if x+newX >= 0 and y+newY >=0 and x+newX <rows and y+newY <cols and heights[x][y] <= heights[x+newX][y+newY]:
                        traverse( ( x+newX, y+newY ), visited )

            else:
                return
        
        for i in range(cols):
            traverse( (0, i), p_visited )
            traverse( (rows-1 , i), a_visited )
            
        for i in range( 0, rows):
            traverse( ( i, 0), p_visited )
            traverse( ( i , cols-1 ), a_visited )
            
        # print('p', p_visited)
        # print('a', a_visited)
        # print('find common', list(p_visited & a_visited))
        
        return list(p_visited & a_visited)
        