let mergeSort = (arr, l, r) => {
    console.log('MS ', arr, l, r)
    if (l === r) {
        console.log(' item ', arr[l])
        return
    }
    let mid = Math.floor((l + r) / 2)
    mergeSort(arr, l, mid)
    mergeSort(arr, mid + 1, r)
    console.log("CHECK -- ",arr.slice(l,r))
    merge(arr, mid, l, r)

}

let merge = (arr, mid, l, r) => {

    console.log(`arr ${arr} mid ${mid} l ${l} r ${r}`)
    let arr1 = []
    let arr2 = []
    let m = (mid - l) + 1
    let n = (r - mid)
    for (let i = 0; i < m; i++) {
        arr1.push(arr[l + i])
    }
    for (let i = 0; i < n; i++) {
        arr2.push(arr[mid + i + 1])
    }

    let p1 = 0;
    let p2 = 0;

    let k = l;
    while (p1 < m && p2 < n) {
        if (arr1[p1] < arr2[p2]) {
            arr[k] = arr1[p1]
            p1++
        } else {
            arr[k] = arr2[p2]
            p2++
        }
        k++
    }
    //put remaining elements if any
    while (p1 < m) {
        arr[k] = arr1[p1]
        p1++
        k++
    }
    while (p2 < n) {
        arr[k] = arr2[p2]
        k++
        p2++
    }

}
let arr = [5, 4, 7, 3, 2, 6]
mergeSort(arr, 0, 5)
console.log('result',arr)