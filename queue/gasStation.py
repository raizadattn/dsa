class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        
        gas_tank = 0
        gas_remaining  = 0
        starting_index = 0
        
        if( sum(gas) < sum(cost) ):
            return -1
        
        for i in range(len(gas)):
            gas_tank += gas[i] - cost[i]
            
            if( gas_tank < 0 ):
                starting_index = i+1
                gas_tank = 0
                
        return starting_index