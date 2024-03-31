// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// Reference (Non primitive)

// Array, Objects, Functions

// const array1 = [1,2,3,4]

// const product = {
//   name : "Boost",
//   rate : 10 
// }

// const myFunction = function() {
//  console.log(typeof array1);
//  console.log(typeof product);
//  console.log(typeof myFunction);
// }

// myFunction()


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Types of Memory
//Stack(Primitive), Heap (Non-Primitive)

let name = "Abhinav"

let name2 = name

name2 = "Shaji"
console.log(name)
console.log(name2)


let userOne = {
  email:"abc@gmail.com",
  upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "123@gmail.com"

console.log(userOne)
console.log(userTwo)