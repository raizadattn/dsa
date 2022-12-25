
function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function heapify( arr , n, i ){
    //bottom down approach
    //heapify ith element in array arr of size n
    // let parent = Math.floor((i-1)/2)
    let largest = i
    let left = 2*i+1
    let right = 2*i+2
    console.log('heapify called',arr,n,i, left, right)

    if( left < n && arr[left]>arr[largest] ){
        largest = left
    }
    if( right < n && arr[right]>arr[largest] ){
        largest = right
    }
    if(largest != i){
        swap(arr, i, largest)
        heapify(arr, n, largest)
    }
}
let arr2 = [2,6,8,3,7]
//logic for build heap
let n = arr2.length
console.log('parseInt(n/2)-1',parseInt(n/2)-1)
for(i=parseInt(n/2)-1; i>=0; i--){
    console.log('for')
    heapify(arr2, n, i)
}

console.log('printing after building heap')
console.log(arr2)

// TC - logn for n/2 nodes