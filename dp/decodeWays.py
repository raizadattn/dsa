# https://leetcode.com/problems/decode-ways/
class Solution:
    def numDecodings(self, s: str) -> int:
        dp = (len(s)+1)*[-1]
        return self.solve(0, s, dp)
    
    def solve(self, n, s, dp):
        # print('solve', n, s, dp)

        
        if( len(s) == n ):
            return 1
        
        if s[n] == "0":
            return 0
        
        if dp[n] != -1:
            return dp[n]
        
        ans = self.solve(n+1, s, dp)
        if n+1 < len(s) and (s[n] == "1" or (s[n] == "2" and s[n+1] in "0123456")) :
            ans += self.solve( n+2, s, dp)
        
        dp[n] = ans
        return ans
        