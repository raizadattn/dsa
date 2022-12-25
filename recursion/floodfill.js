/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
//https://leetcode.com/problems/flood-fill/submissions/
 var floodFill = function(image, sr, sc, newColor) {
    function dfs( image, sr, sc, oldColor, newColor ){
            // console.log('dfs',sr,sc)
        
        if( sr< 0 || sr>= image.length || sc<0 || sc>=image[0].length || image[sr][sc] === newColor ){
           return
           }
        if( oldColor === image[sr][sc] ){
            // console.log('yes',sr,sc)
           image[sr][sc] = newColor
            dfs( image, sr, sc+1, oldColor, newColor)
            dfs( image, sr, sc-1, oldColor, newColor)
            dfs( image, sr-1, sc, oldColor, newColor)
            dfs( image, sr+1, sc, oldColor, newColor)
           }else{
               return
           }
        
    }   
    let oldColor = image[sr][sc]
    
    dfs( image, sr, sc, oldColor, newColor)
    return image
};
