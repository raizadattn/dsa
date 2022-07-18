/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    let ans = []
    let map = {}
    let stack = [-1]

    let size = stack.length
    for( let i = nums2.length-1; i>=0; i-- ){
        // console.log('i',nums2[i])
            while( stack[size-1] < nums2[i] && stack[size-1] !== -1 ){
                  stack.pop()
                  size = size - 1
                  }
        map[nums2[i]] = stack[size-1]
        stack.push(nums2[i])
        // console.log('st',stack)
        size = size + 1
        }
    
    // console.log('stack',stack, map)
    for( let i= 0; i<nums1.length; i++){
        ans.push(map[nums1[i]])
    }
    // console.log('ans',ans)
    return ans
};

let nums1 = [4,1,2]
let nums2 = [1,3,4,2]
nextGreaterElement(nums1, nums2)

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]