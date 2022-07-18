const obj = {
    data:5
}
const obj3 = {
    data:88
}
const obj2 = {
    data: 7,
    next:obj3
}
obj.next = obj2
obj2.data  = 8
obj3.data = 77
console.log(obj)