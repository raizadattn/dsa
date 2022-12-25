# https://leetcode.com/problems/word-break/
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        dp = [-1]*(len(s)+1)
        self.dfs( s, wordDict, 0 , dp)
        for i in dp:
            if i is True:
                return True
        return False
    
    def dfs(self, s, wordDict, index, dp ):

        if( dp[index] != -1):
            return dp[index]
        
        if ( index == len(s) ):
            return True
        
        for i in range( len( wordDict ) ):
            
            k = 0
            j = index
            
            while( j< len(s) and k<len(wordDict[i]) and s[j] ==   wordDict[i][k] ):
                k+=1
                j+=1

            if k == len(wordDict[i]):
                ans = self.dfs( s, wordDict, index + len(wordDict[i]) , dp ) 
                if ans:
                    dp[index] = True
                    return True
            
        dp[index] = False
        return False
        