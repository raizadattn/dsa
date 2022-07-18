//A person can only climb one or two stairs at a time 
function climbStairs(n){
    if(n<0){
        return 0
    }
    if(n===0){
        return 1
    }
    return climbStairs(n-1) + climbStairs(n-2)
}


climbStairs(10)

// iterative approach

// ways at nth step = ways for n-2 step + ways for n-1 step

// Time Complexity: O(n)
// Space Complexity: O(1)

// class Solution {
// public:
//     int climbStairs(int n) {
//         if (n <= 2) return n;
//         int prev = 2, prev2 = 1, res;
//         for (int i = 3; i <= n; i++) {
//             res = prev + prev2;
//             prev2 = prev;
//             prev = res;
//         }
//         return res;
//     }
// };
