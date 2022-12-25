# https://leetcode.com/problems/house-robber/
class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [-1]*(n+1)
        # ans = self.solve(n-1, 0, nums, dp)
        ans = self.tabulation( nums, dp)
        return ans
    #memoisation
    def solve(self,n, sum, nums, dp):
        
        if(n < 0):
           
            return  0
        if( n==0 ):
            
            return nums[0]
        if( dp[n] != -1 ):
            return dp[n]    
        picked = nums[n] + self.solve(n-2, sum+nums[n], nums, dp)
        notPicked = self.solve(n-1, sum, nums, dp)
        
        dp[n] = max(picked , notPicked)
        return max(picked , notPicked)
    
    #tabulation
    def tabulation(self,nums,dp):
        dp[0] = nums[0]
        for i in range(1,len(nums)):
           # pick = 
            picked = nums[i]
            if(i-2>=0):
                picked += dp[i-2]
            
            notPicked = 0 + dp[i-1]
            
            dp[i] = max( picked, notPicked)
        return dp[len(nums)-1]
