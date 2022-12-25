//easy
// https://leetcode.com/problems/island-perimeter/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var islandPerimeter = function(grid) {
    let i = grid.length
    let j = grid[0].length
    let perimeter = 0
    for( let m=0; m<i; m++){
        for( let n=0; n<j; n++){
            if( grid[m][n] == 1){
                perimeter += 4
                //check left
                if( m>0 && grid[m-1][n] == 1){
                    perimeter -= 2
                }
                //check top
                if( n>0 && grid[m][n-1] == 1){
                    perimeter -= 2
                }
            }
        }
    }
    
    return perimeter
};