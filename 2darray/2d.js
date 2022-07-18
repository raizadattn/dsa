let x = 10

var vis = new Array(x).fill().map(e=> new Array(x).fill(0));
vis[2][3] = 5
console.log('vis',vis)