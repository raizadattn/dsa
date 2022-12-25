# https://leetcode.com/problems/perfect-squares/submissions/

class Solution:
    def numSquares(self, n: int) -> int:
        squares = []
        dp = [-1]*(n+1)
        for i in range(1, n+1 ):
            if pow(i,2)<=n:
                squares.append(pow(i,2))
            else:
                break
        # result =  self.solve(n, squares, dp)
        result =  self.solveTab(n, squares)
        
        return result

    def solve(self, n, squares, dp):

        if(n==0):
            return 0
        if n<0:
            return float('inf')
        if dp[n] != -1:
            return dp[n]
        
        ans = float('inf')
        for i in squares:
            ans = min( ans, self.solve( n-i, squares, dp) + 1 )
        
        dp[n] = ans
        return ans
    
    def solveTab( self, n, squares):
        dp = [ float('inf') ]*(n+1)
        dp[0] = 0
        
        for target in range(1,n+1):
            for j in range(1, target+1):
                
                square = j * j
                if square > target :
                    break
                
                dp[target] = min( dp[target], dp[target - square] + 1)
        
        return dp[n]
                
                
        