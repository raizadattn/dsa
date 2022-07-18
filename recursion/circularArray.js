async function main(){
    console.log('main')
    // setTimeout(() => {
    //     console.log('settimeout')
    //     // return 'abhi'
    // }, 1000);
    await new Promise(r => setTimeout(()=>console.log('raizada'), 1000));
    console.log('main2')

}

async function test(){
    console.log('test1')
    // await main()
    main()
    console.log('test2')
}

test()