class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        
            row, col = len(matrix), len(matrix[0])
            low = 0
            high = row*col -1
            
            while( low<= high):
                mid = (low+high)//2
                
#                 extract row and col from mid

                if matrix[mid//col][mid%col] == target:
                    return True
                
                if target> matrix[mid//col][mid%col]:
                    low = mid+1
                else:
                    high = mid -1
                    
            return False
                