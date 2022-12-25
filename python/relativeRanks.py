# https://leetcode.com/problems/relative-ranks/

import heapq
class Solution(object):
    def findRelativeRanks(self, score):
        scoreHeap = []
        for i in range(len(score)):
            #make pair
            heappush(scoreHeap, (score[i]*-1 , i))
            
        
        print('ff',scoreHeap)
        
        i = 1
        res = ['']*len(score)
        while(len(scoreHeap)):
            val , idx = heappop(scoreHeap)
            # print('new',scoreHeap)
            # print('----',val,idx)
            if( i ==1 ):
                res[idx] = "Gold Medal"
            elif( i ==2 ):
                res[idx] = "Silver Medal"
            elif( i ==3 ):
                res[idx] = "Bronze Medal"
            else:
                res[idx] = str(i)
            
            i += 1
        print('res',res)
        return res
            
        """
        :type score: List[int]
        :rtype: List[str]
        """
        