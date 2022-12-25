import heapq
# def findKthLargest(self, nums: List[int], k: int) -> int:
def findKthLargest( nums, k: int) -> int:
        for i in range(len(nums)):
            nums[i] = -1*nums[i]       

        print('nums',nums)     
        heapq.heapify(nums)
        print('heapq',nums)
        for i in range(k-1):
            temp = heapq.heappop(nums)
            print('temp',temp)

        print('return',-1*heapq.heappop(nums))            
        return -1*heapq.heappop(nums)

findKthLargest([2,1,5,2,6,8], 3)        