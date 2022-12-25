# https://leetcode.com/problems/maximum-product-subarray/
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        
        res = max(nums) 
        mini = nums[0]
        maxi = nums[0]
        for i in range(1, len(nums)):
            if( nums[i]==0 ):
                maxi = 1
                mini = 1
                continue 
            temp = maxi
            maxi = max( nums[i] , nums[i]*maxi, nums[i]*mini  )
            mini = min( nums[i] , nums[i]*temp, nums[i]*mini )
        
            res = max(res, maxi)
            
        return res