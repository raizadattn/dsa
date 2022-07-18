var maxProfit = function(prices) {
    
    let maxProfit = 0 ;
    let minSoFar = prices[0]
    let sp = 0;
    for( let i=0;i<prices.length;i++){
        
        if( prices[i] < minSoFar ){
            minSoFar = prices[i]
            console.log('minSoFar',minSoFar)
        }
        console.log('prices[i] - minSoFar,  maxProfit',prices[i] - minSoFar,  maxProfit)
        console.log('prices[i], minSoFar',prices[i] , minSoFar)
        maxProfit = Math.max(prices[i] - minSoFar,  maxProfit)
        
    }
    console.log('maxProfit',maxProfit)
    return maxProfit
};

maxProfit([0,1])