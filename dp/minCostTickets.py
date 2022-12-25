class Solution:
    def mincostTickets(self, days: List[int], costs: List[int]) -> int:
        dp = [-1]*366
        # return self.solve( days, costs, 0, len(days), dp)
        return self.tabulation( days, costs, len(days))
    
    def solve(self, days, costs, i, n, dp):
        
        if( i >= n ):
            return 0
            
        if( dp[i] != -1):
            return dp[i]
        
#         1 day pass
        option1 = costs[0] + self.solve( days, costs , i+1, n, dp)
        
    
#         7 day pass
        index = i
        while( index < n and days[index]< days[i]+7 ):
            index+=1
        option2 = costs[1] + self.solve( days, costs, index , n, dp)
        
#         30 day pass
        index = i
        while( index < n and days[index]< days[i]+30 ):
            index+=1
        
        option3 = costs[2] + self.solve( days, costs, index , n, dp)
        
        dp[i] = min(option1, option2, option3)
        return dp[i]
    
    def tabulation(self, days, costs, n):
        dp = [0]*(n+1)
        dp[n] = 0
        for i in range(n-1,-1,-1):
            option1 = costs[0] + dp[i+1]

            index = i
            while( index < n and days[index]< days[i]+7 ):
                index+=1
            option2 = costs[1] + dp[index]

            index = i
            while( index < n and days[index]< days[i]+30 ):
                index+=1

            option3 = costs[2] + dp[index]

            dp[i] = min(option1, option2, option3)
        
        return dp[0]
        s