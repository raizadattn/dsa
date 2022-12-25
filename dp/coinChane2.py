//https://leetcode.com/problems/coin-change-ii/

class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        dp = [ [ -1 for i in range(amount + 1) ] for j in range(len(coins)) ]
        return self.solve( amount, coins, len(coins)-1, dp )

    def solve( self, amount, coins, index, dp):
        if amount == 0 :
            return 1
        if amount < 0 or index< 0:
            return 0
        
        if( dp[index][amount] != -1):
            return dp[index][amount]
        
        b = self.solve( amount , coins, index-1, dp )

        a = self.solve( amount - coins[index] , coins, index, dp )        

        # dp[index][amount] = self.solve( amount , coins, index-1, dp ) + self.solve( amount - coins[index] , coins, index, dp )
        dp[index][amount] = a + b
        return dp[index][amount]
    
    
    
#     def dp(self, coins, amount, index, lookup):
#         if amount == 0:
#             return 1
#         if lookup[index][amount] == -1:
#             combinations = 0
#             for i in range(index, len(coins)):
#                 if amount >= coins[i]:
#                     combinations += self.dp(coins, amount-coins[i], i, lookup)
#             lookup[index][amount] = combinations
#         return lookup[index][amount]
    
#     def change(self, amount: int, coins: List[int]) -> int:
#         return self.dp(coins, amount, 0, [[-1 for _ in range(amount+1)] for _ in range(len(coins))])
