//combinationSum.js

function sum(arr,target,k,result){
    console.log('sum--',target,k,result)
    if(target<0){
        return 0
    }
    if(target===0){
    console.log('---------target--',target,k,result)

        return 1
    }
    for( let i=k;i<arr.length; i++ ){
        let tempans = sum(arr,target-arr[i],i,result)
        console.log('+++++=tempans',tempans)
        result = result + tempans
    }
    return result
}
let target = 7
let result = 0
let x = sum([2,3,6,7], target,0,0)
console.log(x)