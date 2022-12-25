// {
//       let x = 2;
// }
let gScope = 'Global scope'
function myFunction() {
    const carName = "Volvo";   // Function Scope
}
var x = 10;

function foo() {
  var y = 20; // free variable
  function bar() {
    var z = 15; // free variable
    return x + y + z;
  }
  return bar;
}
let fooClosure = foo()
console.log('foocl', fooClosure())

// console.log(carName)

// the function defined in the closure ‘remembers’ the environment in which it was created.

// closure
function numberGenerator() {
    // Local “free” variable that ends up within the closure
    var num = 1;
    function checkNumber() {
        console.log(num);
    }
    num++;
    return checkNumber;
}

var number = numberGenerator();
number(); // 2

// EX 2
function sayHello() {
    var say = function() { console.log(hello); }
    // Local variable that ends up within the closure 
    var hello = 'Hello, world!';
    return say;
  }
  var sayHelloClosure = sayHello(); 
  sayHelloClosure(); // ‘Hello, world!’

//   use case
//   function Test(privateText) {
//     const hidden = privateText
  
//     return {
//       privateVar: function() {
//         return hidden
//       }
//     }
//   }
  
//   const test = Test("I am private");
//   test.hidden // undefined
//   test.privateVar()

// usecase
// it has to do with the scoping of variables
// anonymous function -- no name
// variables and functions defined within the anonymous function are not available to the code outside it.
(function () {
                let date = new Date().toString();
    //             document.querySelector('.output').textContent = date;
                console.log(' inside date', date)
                // console.log(' inside global', global)
          
                // Assign to global window making it
                // accessible to outside
    //             window.date = date;
                global.date = date;
            })();
console.log('outside date var', date)

// new keyword
console.log('new \n')
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  const car1 = new Car('Nexon', 'XM', 2019);
  const car2 = new Car('Nissan', '300ZX', 2022);
  
  console.log(car1.make);
  console.log(car2.make);
  console.log('car1.this', car1)


//   Object Literal is generally used to create a single object. The constructor function is useful if you want to create multiple objects.