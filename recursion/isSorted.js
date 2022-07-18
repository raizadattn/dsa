function isSorted(arr, i, size) {
    if (size === 0 || size === 1) {
        return true
    }
    if (arr[i] <= arr[i + 1]) {
        return isSorted(arr, i + 1, size - 1)
    } else {
        // console.log('arr', arr[i], i)
        return false
    }
}
let arr = [1, 2, 3, 4, 6, 5]
let res = isSorted(arr, 0, arr.length)
console.log(res)