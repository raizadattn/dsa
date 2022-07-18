
//  var permute = function(nums) {
//     let res = []
//     let dfs = (arr, l, r) =>{
//         if(l===r){
//            res.push([...arr])
//             return
//            }else{
//                 for(let i=l; i< r+1; i++){
//                     swap(arr,l,i)
//                     dfs(arr, l+1, r)
//                     swap(arr,l,i)
//                 }      
//            }
        
//     }
//     let swap = (arr, l, r) =>{
//         let temp = arr[l];
//         arr[l] = arr[r];
//         arr[r]= temp;
//     }
//     dfs(nums, 0, nums.length-1)
//     return res
// };

// let ans = permute([1,2,3])
// console.log(ans)


var permute = function(nums) {
    let res = []
    let dfs = (arr, l) =>{
        if(l===arr.length-1){
           res.push([...arr])
            return
           }else{
                for(let i=l; i< arr.length ; i++){
                    swap(arr,l,i)
                    dfs(arr, l+1)
                    swap(arr,l,i)
                }      
           }
        
    }
    let swap = (arr, l, r) =>{
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r]= temp;
    }
    dfs(nums, 0)
    return res
};

let ans = permute([1,2,3])
console.log(ans)