/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

// ship package within days
 var shipWithinDays = function(weights, days) {

    function isPossible(minWeight,days){
            let daysNeeded = 1;
            let weightsPerDay = 0
            let curr = 0
            for( let item of weights){
                curr += item
                // console.log("curr > minWeight",curr, minWeight)
                if(curr > minWeight){
                    
                    daysNeeded += 1
                    // console.log('curr',curr,minWeight,'daysNeeded',daysNeeded)
                    curr = item
                }
                
                // console.log('c',curr)
                
            }
        // console.log('************days',daysNeeded,minWeight)
            if( daysNeeded <= days ){
               return true
               }else{
                   return false
               }
    }
    let start = Math.max(...weights)
    let sum = weights.reduce((acc, a)=>a+acc,0)
    
    let end = sum
    // console.log('sum',sum,start,end)
    let mid ;
    let ans = -1
    while(start<=end){
        mid = Math.floor((start+end)/2)
        // console.log('mid',mid)
        let possible = isPossible(mid,days)
        // console.log('possible',possible)
        if(possible){
            end = mid - 1
            ans = mid
        }else{
            start = mid+1
        }
        
    }
    return ans
    
};