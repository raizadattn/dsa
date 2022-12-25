
# https://leetcode.com/problems/longest-common-subsequence/
class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        m, n = len(text1), len(text2)
        dp = [ [ -1 for i in range(n+1)] for j in range(m+1) ]
        self.solve( text1, text2, m, n , dp)
        return dp[m][n]
        
    def solve( self, text1, text2, index1, index2 , dp ):
        if( index1 < 0 or index2 < 0 or index1 == 0 or index2 == 0 ):
            return 0
        if dp[index1][index2] != -1:
            return dp[index1][index2]
        
        if text1[index1-1] == text2[index2-1]:
            dp[index1][index2] = 1 + self.solve( text1, text2, index1-1, index2-1 , dp)
            return dp[index1][index2]
        dp[index1][index2] = max( self.solve( text1, text2, index1-1, index2, dp ), self.solve( text1, text2, index1, index2-1 , dp ) )
        return dp[index1][index2]