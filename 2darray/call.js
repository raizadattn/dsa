// this
// “this” always refers to an object.
// “this” refers to an object which calls the function it contains.
// In the global context “this” refers to either window object or is undefined if the ‘strict mode’ is used.

// The call, apply, bind method binds the this value to the function and executes the function

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(param=" " ){
        // console.log(this.registrationNumber + " " + this.brand );
        console.log(this.registrationNumber + " " + this.brand + " "+ param );
    }
}

car.displayDetails()

// Borrow a method
// “this” will be now assigned to the global context
// global.brand = 'BMW'
var myCarDetails = car.displayDetails;
myCarDetails();

// The bind() method creates a new function where “this” refers to the parameter in the parenthesis in the above case “car”. This way the bind() method enables calling a function with a specified “this” value
let car2 = {
    registrationNumber: "PB-420",
    brand: "MERCEDES",
}
var myCarDetails = car.displayDetails.bind(car2); 
myCarDetails(); // PB-420 MERCEDES

var myCarDetails = car.displayDetails.bind(car, "Vivian");
myCarDetails()

var x =car.displayDetails.call(car, ["Viviankoook"]);
console.log(' x', x)
// bind returns the function and then we can invoke it
console.log('bind returns the function and then we can invoke it-----------')
// var myCarDetails = car.displayDetails.bind(car2);
// myCarDetails()
car.displayDetails.bind(car2)();

console.log('--------------apply call \n')

// call is a function that you use to change the value of this inside a function and execute it with the arguments provided.
// helps you change the context of the invoking function

// Call and apply
var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota"
}

function displayDetails(ownerName) {
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
}
displayDetails.apply(car, ["Vivian"]);
displayDetails.call(car, ["Vivian"]);

// apply() function the parameter must be placed in an array