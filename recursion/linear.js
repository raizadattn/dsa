//linear search via recursion

function ls(arr, i, key){
    // i is a pointer
    if( i === arr.length-1){
        if( arr[i] === key){
            return true
        }else{
            return false
        }
    }
    if(arr[i] == key){
        return true
    }else{
        return ls(arr,i+1,key)
    }
}
let key = 1
console.log(ls([3,4,5,1,2,6] , 0, key))