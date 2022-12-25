# https://leetcode.com/problems/coin-change/

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        mini = float('inf')
        dp = [ -1 ]*(amount+1)
        # ans = self.solve( coins, amount, mini, dp )
        
        # print('dp',dp)
        # if(dp[amount] == float('inf')):
        #     return -1
        # else:
        #     return dp[amount]
        
        #bottom up
        return self.solveTab( coins, amount )
       
        #memoisation
    def solve(self, coins, amount, mini, dp):
        
        
        if amount == 0:
            dp[0] = 0
            return 0
        if amount < 0 :
            return float('inf')
        
        if dp[amount] != -1:
            return dp[amount]
        
        mini = float('inf')
        for i in range(len(coins)):
            
            ans = self.solve(coins, amount-coins[i] , mini, dp )
            
            if( ans != float('inf') ):
                mini = min( ans+1, mini)
        
        dp[amount] = mini
        return mini
    
    
    #bottom up
    def solveTab(self, coins, amount):
        
        dp = [float('inf')]*(amount+1)   
        dp[0] = 0

        for i in range(1,amount+1):
            for j in range(len(coins)):
                if i-coins[j] >= 0 :
                    dp[i] = min( dp[i], dp[i-coins[j]] + 1 )
        # print('dp',dp, dp[amount])
        if dp[amount] == float('inf'):
            return -1
        else:     
            return dp[amount]
        