class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        dp = [[ -1 for i in range(len(word2 )+1 )] for i in range(len(word1) + 1)]
        # return self.solve( word1, word2, 0, 0, dp )
        return self.tabulation( word1, word2, 0, 0)
    
    def solve( self, word1, word2, index1, index2, dp ):
        
        if( index1 == len(word1) ):
            return len(word2) - index2
        if( index2 == len(word2) ):
            return len(word1) - index1
        
        if( dp[index1][index2] != -1 ):
            return dp[index1][index2]
            
        if( word1[index1] == word2[index2] ):
            return self.solve( word1, word2, index1+1, index2+1, dp )
        
#         insert
        option1 = self.solve( word1, word2, index1, index2+1, dp )
        
#         delete
        option2 =  self.solve( word1, word2, index1+1, index2, dp)
        
#         replace
        option3 =  self.solve( word1, word2, index1+1, index2+1, dp)
        
        dp[index1][index2] = 1 + min( option1, option2, option3 )
        return dp[index1][index2]
    
    
    def tabulation( self, word1, word2, index1, index2 ):
        
        dp = [[ 0 for i in range(len(word2 )+1 )] for j in range(len(word1) + 1)]
        
        m,n = len(word1), len(word2)
        for i in range(len(word2)+1):
            dp[0][i] = i
        
        for j in range( len(word1) + 1):
            dp[j][0] = j
        
        for i in range( 1, m+1 ):
            for j in range( 1, n+1 ):

                if( word1[i-1] == word2[j-1] ):
                    dp[i][j] = dp[i-1][j-1]        
                else:
                    
                #         insert
                        option1 = dp[i][j-1]

                #         delete
                        option2 =  dp[i-1][j]

                #         replace
                        option3 =  dp[i-1][j-1]

                        dp[i][j] = 1 + min( option1, option2, option3 )
        print('dp',dp)
        return dp[m][n]