let i = 0
let intervalHandler = setInterval(()=>{

    if ( i == 7 ){
        clearInterval( intervalHandler )
    }

    console.log('set interval - ', i++)
}, 1000)

// setTimeout( ( ) => {
//     console.log('SetTimeout callback came back from the browser API after 3 secs ')
// }, 3000)