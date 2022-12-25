class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        dp = [ [ -1 for i in range(len(p)+1)] for i in range(len(s)+1)  ]
        return self.solve(s,p,0,0, dp)
    
    def solve( self, s, p,i1,i2, dp):
        # print('i1,i2',i1,i2, len(s), len(p) )
        if( i1 == len(s) and i2 ==len(p) ) :
            
            return True
        if( i1 ==len(s) and i2!= len(p)):
            for i in range(i2, len(p) ):
                if( p[i]!= '*' ):
                    return False
            
            return True
            # return False
        if( i1 !=len(s) and i2== len(p)):
            return False
        
        if( dp[i1][i2] != -1 ):
            return dp[i1][i2]
        
        if( s[i1] == p[i2] or p[i2] == '?' ):
            dp[i1][i2] = self.solve(s, p, i1+1, i2+1, dp )
            return dp[i1][i2]
        elif( p[i2] == '*'):
            dp[i1][i2] = ( self.solve(s, p, i1+1, i2, dp ) or self.solve(s, p, i1, i2+1, dp ) )
            return dp[i1][i2]
            
        else:
            return False
            
            
        
        
            