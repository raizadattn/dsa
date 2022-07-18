// generate_paranthesis.js

const { SSL_OP_NETSCAPE_CHALLENGE_BUG } = require("constants")


function gp(total, open, closed, output, result) {
    console.log('----',total, open, closed, output, result,'>>>',output)
    if (open === closed && total === open) {
        console.log('inserting ----',total, open, closed, output, result)
        result.push(output)
        return
    }
    if (open < total) {
        gp(total, open+1, closed, output + '(', result)
        // console.log('mid',output)
        // output = output.slice(0,-1)
        console.log('slixiing ',output)
    }
    console.log('MIDDDD',closed,open)
    if (closed < open) {
        console.log('2nd call',open, closed+1, output + ')','>>>>>>',output)
        gp(total, open, closed+1, output + ')', result)
        // output = output.slice(0,-1)
    }
    console.log('res', result)
    // return result

}

let n = 2
let result = []
let x = gp(n, 1, 0, '(', result)
console.log(result,x)


//leetcode submission
// var generateParenthesis = function(n) {
//     let open = 0
//     let close = 0
//     let result = []
//     let stack = []
//     const dfs = (open, close) =>{
//         if( open ===close && open === n){
//             result.push([...stack].join(''))
//             return
//         }
//         if(open<n){
//             stack.push('(')
//             dfs(open+1,close)
//             stack.pop()
//         }
//         if(close<open){
//             stack.push(')')
//             dfs(open,close+1)
//             stack.pop()
//         }
//     }
//     dfs(0,0)
//     return result
    
// };