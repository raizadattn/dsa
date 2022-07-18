let a = []

let ans = []
function main(ans,i){
    if(i===0){
        return
    }
    a.push(i)
    ans.push(a)
    i--
    main(ans,i)
}


main(ans,5)

console.log(ans)