# https://www.codingninjas.com/codestudio/problems/cut-into-segments_1214651?leftPanelTab=3
# error on submission

def cutSegments(n, x, y, z):
    dp = [float('-inf')]*(n+1)
    ans = solve(n,x,y,z,dp)
    if dp[n]< 0:
        return 0
    else:
        return dp[n]
def solve( n,x,y,z, dp):
    
      if n== 0:
        return 0
      if n< 0:
            return float('-inf')

      if(dp[n]!= float('-inf')):
            return dp[n]
      first = solve( n-x, x,y,z ,dp) + 1

      second = solve( n-y, x,y,z ,dp) + 1

      third = solve( n-z, x,y,z ,dp) + 1

#       print('sol',first,second, third)
      dp[n] = max( first, max(second,third) )
      return dp[n]