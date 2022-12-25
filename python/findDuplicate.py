# https://leetcode.com/problems/find-the-duplicate-number/
class Solution(object):
    def findDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        for i in range(len(nums)):
            # print('--',i,'index',abs(nums[i])-1, 'val at idx', nums[nums[i]-1], nums)
            index = abs(nums[i])-1
            
            if(nums[index] < 0):
                return index+1
            else:
                nums[index] = nums[index]*-1