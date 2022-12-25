class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        m,n = len(matrix), len(matrix[0])
        rowMin = 0
        rowMax = m-1
        colMin = 0
        colMax = n-1
        result = []
        
        while( rowMin<= rowMax and colMin <= colMax):
            # Traverse right
            for i in range(colMin, colMax+1):
                result.append(matrix[rowMin][i])
            rowMin += 1

            # Traverse down
            for j in range(rowMin, rowMax+1):
                result.append(matrix[j][colMax])
                # print('res',result)
                
            colMax -= 1

            # Traverse left
            if( rowMin <= rowMax):
                
                for k in range(colMax, colMin-1, -1):
                    result.append(matrix[rowMax][k])
                    # print('res',result)
                
            rowMax -= 1
            
            if( colMin <= colMax):
            
                # Traverse up
                for l in range(rowMax, rowMin-1, -1):
                    result.append(matrix[l][colMin])
                    # print('res',result)
                
            colMin += 1
        return result