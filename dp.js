1.
Array(3).fill(null).map(() => Array(3).fill(0)); // pass by value

2.
// first create a DP
const DP = [];
for (let i = 0; i <= m; i++) {
    DP[i] = [];
}