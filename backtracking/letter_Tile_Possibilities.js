// letter_Tile_Possibilities.js

function numTilePossibilities(tiles, output, freqArray, result) {
    console.log('---result',result)
    for (let i = 0; i < 26; i++) {
        if (freqArray[i] > 0) {
            result++
            console.log('print ',result)
            freqArray[i]--
            result = numTilePossibilities(tiles, output, freqArray, result)
            freqArray[i]++
        }
        
    }
    return result
}
// let tiles = "AAB"
let tiles = "AAABBC"

let freqArray = []
//can also take a map here to store indexes
let map = {}
let output = ''
let result = new Set()
let res = 0
for (let i = 0; i < 26; i++) {
    freqArray.push(0)
}
function asciiDif(a, b) {
    console.log('ret', a.charCodeAt(0) - b.charCodeAt(0))
    return a.charCodeAt(0) - b.charCodeAt(0);
}

for (let item of tiles) {
    freqArray[asciiDif(item, 'A')]++;
}
console.log(freqArray)
let answer = numTilePossibilities(tiles, output, freqArray, res)
console.log('res',res)
console.log(answer)


//first good approach , above is the second approach

// var numTilePossibilities = function (tiles) {
//     function bt(tiles, res, output, map) {
  
//         for (let i = 0; i < tiles.length; i++) {
//           if( !map[i]  ){
//           map[i] = 1
//           output = output + tiles[i]
//           res.add(output)
  
//           bt(tiles, res, output, map)
//           output = output.slice(0, output.length - 1)
//           map[i] = 0
//         }
//       }
  
//     }
//     let res = new Set()
//     let map = {}
//     let output = ""
//     bt(tiles, res, output, map)
//     return res.size
//   };