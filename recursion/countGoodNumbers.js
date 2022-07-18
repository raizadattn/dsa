/**
 * @param {number} n
 * @return {number}
 */

//Modular Exponentiation (Power in Modular Arithmetic)
 var countGoodNumbers = function(n) {
    let mod = 10**9+7
    function solve(n){
        if( n%2 === 0){
            return (power(5,Math.floor(n/2)))*(power(4,Math.floor(n/2)) )%1000000007n
           }else{
               return BigInt(5)*(power(5,Math.floor(n/2)))*(power(4,Math.floor(n/2)))%1000000007n
           }
        
    }
    function power(x,y){
        //if y is odd
        // x = BigInt(x)
        // y = BigInt(y)
        let temp = BigInt(1)
        //same as 1n
        if( y === 0){
            return temp
        }

        if( y%2 === 0 ){
            temp = power(x, Math.floor(y/2) )
            temp = BigInt(temp)
            return (temp%1000000007n)*(temp%1000000007n)
        }else{
            temp = power(x, Math.floor(y/2) )
            temp = BigInt(temp)

            return BigInt(x)*(temp%1000000007n)*(temp%1000000007n)
        }
    }
    return solve(n)

};
let ans = countGoodNumbers(50) 
console.log(ans)
// 836864072
// console.log(10**9+7)