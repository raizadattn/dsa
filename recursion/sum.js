let arr = [3,2,5,1,6]

function sum(arr,i){
    if( i === arr.length ){
        return 0
    }
    return arr[i]+sum(arr,i+1)

}
let res = sum(arr,0)
console.log(res)