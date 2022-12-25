
# https://leetcode.com/problems/maximal-square/submissions/
class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        m = len(matrix)+1
        n = len(matrix[0])+1
        # dp = [[float("-inf")]*n]*m  worng way of initialisation
        
        dp = [[float("-inf") for i in range(n)] for j in range(m)]
        # self.solve(0, 0, matrix, dp)

        # for tabulation
        return self.solveTab( len(matrix), len(matrix[0]), matrix )
        
        maxi = float('-inf')
        print('dp',dp)
        for i in range(m):
            for j in range(n):
                if max( maxi , dp[i][j] ) > maxi:
                    maxi = max( maxi , dp[i][j] )
        
        return maxi**2
        
    def solve(self, m, n, matrix, dp):
        
        if( m>=len(matrix) or n>= len(matrix[0]) ):
            return 0
        if dp[m][n] != float("-inf"):
            return dp[m][n]
        a = self.solve(m, n+1 ,matrix, dp)

        b = self.solve(m+1, n, matrix, dp)

        c = self.solve(m+1, n+1, matrix, dp)

        if matrix[m][n] == "1":
            ans = 1 + min(a,b,c)
            dp[m][n] = ans
            return ans
            
        else:
            dp[m][n] = 0
            return 0
        
    def solveTab(self, m, n, matrix):
        
        dp = [[0 for i in range(n)] for j in range(m)]
        maxi = float('-inf')
        dp[m-1][n-1] = matrix[m-1][n-1]
        for i in range(1, m):
            for j in range(1, n):
                # print('hi')
                a= dp[i][j-1]
                b= dp[i-1][j]
                c= dp[i-1][j-1]

                ans = min(a, b, c)

                if matrix[i][j] == "1":
                    dp[i][j] = ans + 1
                    maxi = max( maxi, dp[i][j])

                else:
                    dp[i][j] = 0
                    maxi = max( maxi, dp[i][j])
        return maxi**2