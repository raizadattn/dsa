function nextSmaller(heights){
    let stack = [-1]
    let ans = []
    for(let i=heights.length-1;i>=0;i--){
        while( stack[stack.length-1]!== -1 && stack[stack.length-1] >= heights[i] ){
              stack.pop()
              }   
        ans.push(stack[stack.length-1])
        stack.push(heights[i])
        
    }
    
    return ans.reverse()
}
function prevSmaller(heights){
    let stack = [-1]
    let ans = []
    for(let i=0;i<heights.length;i++){
        // console.log('s',stack)
        while( stack[stack.length-1] !== -1 && stack[stack.length-1] >= heights[i] ){
              stack.pop()
              }   
        
        ans.push(stack[stack.length-1])
        stack.push(heights[i])
        // console.log('ans ps',ans)
    }
        
    
    return ans
}

let heights = [2,1,1,1,5,6,2,3]
let ns = nextSmaller(heights)
let ps = prevSmaller(heights)
console.log('ns',ns)
console.log('ps',ps)