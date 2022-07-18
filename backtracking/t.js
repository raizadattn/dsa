let arr= [2,3,1]
let count = 0

for(let j=1;j<arr.length+1;j++){
    if( arr[j]%j ===0 || j%arr[j]==0 ){
        console.log('item',j,arr[j])
        console.log('arr[j]%j',arr[j]%j)
        console.log('j%arr[j]',j%arr[j])
        console.log('-----------------------------')
       count++
       }
}
console.log(count)