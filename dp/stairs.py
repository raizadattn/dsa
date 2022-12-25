# https://leetcode.com/problems/min-cost-climbing-stairs/submissions/

class Solution:

    #memoisation method
    # def minCostClimbingStairs(self, cost: List[int]) -> int:
    #     n = len(cost)
    #     dp = [-1]*(n+1)
    #     return min( self.minCost(cost, n-1, dp), self.minCost(cost, n-2, dp) )
    def minCost(self,cost, n, dp):
        
        if(n==0 or n==1 ):
            dp[n] = cost[n]
            return dp[n]
        if(dp[n] == -1):
            dp[n] = cost[n]+ min( self.minCost(cost, n-1, dp), self.minCost(cost, n-2, dp) )
            return dp[n]
        else:
            return dp[n]
        
        
    # Tabulation method
    
    # def minCostClimbingStairs(self, cost: List[int]) -> int:
    #     n = len(cost)
    #     return self.solve2(cost, n)
    
    def solve2(self,cost, n ):
        
        dp = [-1]*(n+1) 
        dp[0] = cost[0]
        dp[1] = cost[1]
        
        for i in range(2, n ):
            dp[i] = cost[i] + min( dp[i-1] , dp[i-2] )
        print(dp)
        return min( dp[n-1] , dp[n-2] )
    
    
    #space optimised method
    
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        n = len(cost)
        return self.solve3(cost, n)
    
    def solve3(self,cost, n ):
        
        prev2 = cost[0]
        prev1 = cost[1]
        
        for i in range(2, n ):
            curr = cost[i] + min( prev2 , prev1 )
            prev2 = prev1
            prev1 = curr
            
        return min( prev1 , prev2 )
    