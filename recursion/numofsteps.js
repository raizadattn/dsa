// 1342. Number of Steps to Reduce a Number to Zero

var numberOfSteps = function(num) {
    function steps( num , count){
        // console.log('num',num, count)
        if( num <= 0 ){
            return count
        }
        count += 1
        if( num%2 === 0){
            return steps( Math.floor(num/2) , count)
        }else{
            return steps( num-1, count)
        }
        
    }
    return steps( num, 0)
    
};