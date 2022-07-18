const async  = require('async')
console.log('hoooooooooooooooooooo')
let array = [1,22,3,4,55]
async.eachSeries(array,(item,cb1)=>{
    console.log('item -> ',item)
    async.eachSeries(array,(el,cb2)=>{
        console.log('c - ',el, array)
        cb2()
    },()=>{console.log('inner done');
    //  cb1()
    })
    console.log('test')
    cb1()
},()=>{console.log('all done')})

console.log('hiiiiiiiiiiiiiiii')