// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// Reference (Non primitive)

// Array, Objects, Functions

const array1 = [1,2,3,4]

const product = {
  name : "Boost",
  rate : 10 
}

const myFunction = function() {
 console.log(typeof array1);
 console.log(typeof product);
 console.log(typeof myFunction);
}

myFunction()