let arr1 = [1, 3, 5, 7]
let arr2 = [2, 4, 6, 8];

let i = 0
let j = 0

let res = []
while (i <= arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
        res.push(arr1[i++])
    } else {
        res.push(arr2[j++])
    }
}

console.log('res - ',res)