// // for( let i=0; i< 10; i++){
// //     for( let j=0; j<7; j++){
// //         if ( j == 3){
// //             console.log('breaking')
// //             // break;
// //             return 'abhi';
// //         }
// //         console.log('ij', i,j)
// //     }
// // }

let res = [1,2,3,4,5,6,7,8,9,0].map(el=> el>5)
console.log(res)


// console.log( '5' == 5)


// // const obj = [{a:1,b:2,c:5,d:8}, {a:123}];
// // let a = [12,123,124,35,234]
// // a.forEach(el=>{
// //     if( el === 124){
// //         continue
// //     }
// //     console.log('item', el)
// // })
// // for(const key of obj){
// //     console.log(key);
// // }


// // program to display value
// // a = 5;
// // console.log(a);
// // let a; // error

// // let a; // error

// // console.log(a);



// greet();
// function greet(){
//     console.log('hiii')
// }
// console.log(typeof [])
// // let greet = function() {
// //     console.log('Hi, there.');
// // }



let arr = { a: [ 1,2 ], b: [3,4 ] }

let x = 53

let check = false

Object.keys( arr ).map(el =>{

    if ( arr[el].indexOf( x ) !== -1 ) {
        // console.log( ' exists ' , el, arr[el].indexOf( x ))
        check = true
    }

})

console.log('check' , check )