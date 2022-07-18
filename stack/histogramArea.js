/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights) {
    function nextSmaller(heights){
        let heightsLen = heights.length
        let stack = [heightsLen]
        let ans = []
        for(let i=heights.length-1;i>=0;i--){
            // while( stack[stack.length-1]!== -1 && stack[stack.length-1] > heights[i] ){ commenting or inserting index in stack instead of element
            while( stack[stack.length-1]!== heightsLen && heights[stack[stack.length-1]] >= heights[i] ){ 
            
                  stack.pop()
                  }   
            ans.push(stack[stack.length-1])
            // stack.push(heights[i])
            stack.push(i)
            
        }
        
        return ans
    }
    function prevSmaller(heights){
        let stack = [-1]
        let ans = []
        for(let i=0;i<heights.length;i++){
            // console.log('s',stack)
            // while( stack[stack.length-1] !== -1 && stack[stack.length-1] > heights[i] ){
            while( stack[stack.length-1] !== -1 && heights[stack[stack.length-1]] >= heights[i] ){
                  stack.pop()
                  }   
            
            ans.push(stack[stack.length-1])
            // stack.push(heights[i])
            stack.push(i)
            // console.log('ans ps',ans)
        }
            
        
        return ans
    }
    
    let ns = nextSmaller(heights)
    let ps = prevSmaller(heights)
    ns = ns.reverse()
    
    console.log(ns)
    console.log(ps)
    
    // for( let i)
    let area = []
    let maxArea = 0;
    for( let i=0; i<heights.length; i++){
        let area = (ns[i]-ps[i]-1) * heights[i]
        if( area > maxArea){
            maxArea = area
        }
    }
    return maxArea
};

let heights = [2,1,5,6,2,3]