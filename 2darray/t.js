// var
// splice
// slice
// find
// filter
// map
// sort
// reverse
// join
// split
// reduce



var _$itsAVariable = 15;
console.log('itsAVariable', _$itsAVariable)

console.log('Slice\n')

let toSliceArray = [ 23, 34, 55, 65, 76, 21]
let slicedResult = toSliceArray.slice( 2, 4 )
console.log('Sliced Array Result ', slicedResult )
console.log('original array after slicing ', toSliceArray)

console.log('Splice\n')

let toSpliceArray = [ 'red', 'blue' ,'black']

toSpliceArray.splice(1, 0, 'yellow', 'grey' ) // delete nothing at index 1 and add 2 elements
console.log(toSpliceArray)
toSpliceArray.splice(3, 1 ) // delete 1 element at index 3 and add nothing
console.log(toSpliceArray)
toSpliceArray.splice(2, 1, 'Magenta' )  // grey is delted
console.log(toSpliceArray)




console.log('Find Filter Map\n')

const ages = [ 16, 32, 33, 40];

// function checkAdult(age) {
//   return age >= 18;
// }

let checkAdult = age => {
	return age >= 18
}
let mapAgesFxn = age =>{
	return age*3
}

const findResult = ages.find(checkAdult);
const filterResult = ages.filter(checkAdult);
const mapResult = ages.map(mapAgesFxn);

console.log('findResult', findResult)
console.log('filterResult', filterResult)
console.log('mapResult', mapResult)

console.log('Sort Reverse\n')

console.log('sort array', [3,2,1].sort( function(a, b){ return a-b }  ))
console.log('sort chars', ['z','x','y'].sort())
console.log('before reversing', ages)
console.log(' --> reversing --> ',ages.reverse())
console.log('after reversing ', ages)

console.log('Join Split isArray\n')


// Joining an splitting
console.log('Join with "" ', ['R', 'a', 'i'].join(''))
console.log('Join with " " ', ['R', 'a', 'i'].join(' '))
console.log('Split with "" ', "Tim Hortons".split(""))
console.log('Split with "" ', "Tim Hortons".split(" "))

console.log(' is Array ?? --> ', Array.isArray([1,2,4]) )
console.log(' is Array ?? --> ', Array.isArray("abhi") )

console.log("Reduce\n")

const numbersReduce = [1, 2, 3, 4, 5, 6];

function sum_reducer(accumulator, currentValue) {
  console.log(`acc - `, accumulator, ` & currentValue - `, currentValue )
  return accumulator + currentValue;
}

let sum = numbersReduce.reduce(sum_reducer);
console.log(sum); // 21