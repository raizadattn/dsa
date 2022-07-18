//     let count = 0
//     function solve(root, sum, targetSum){
//         if( root === null ){
//             return
//         }
//         // console.log(root, sum, targetSum, '---',sum + root.val)
//         sum  = sum + root.val
//         if( sum === targetSum ){
//             count++
//         }
        
//         solve(root.left, sum,  targetSum)
//         solve(root.right, sum,  targetSum)
        
//     }

// var pathSum = function(root, targetSum) {
//     if(root === null){
//         return 0
//     }

//     solve(root,0,targetSum)
//     pathSum(root.left, targetSum)
//     pathSum(root.right, targetSum)
//     return count
// };

var pathSum = function(root, sum) {
    if (!root) return 0;
    
    const dfs = (root, sum) => {
      if (!root) return 0;
      
      let count = 0;
      
      if (root.val === sum) count = 1;
      
      count += dfs(root.left, sum - root.val);
      count += dfs(root.right, sum - root.val);
      
      return count;
    }
    
    return dfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
  };
  