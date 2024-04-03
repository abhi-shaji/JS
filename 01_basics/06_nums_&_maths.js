const score = 400

const balance = new Number(100)

console.log(balance);
console.log(score);

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 23.876

console.log(otherNumber.toPrecision(2));


const hundreds = 100000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));



//++++++++++++++++++++++MATSH+++++++++++++++++++++++++++++++++++

console.log(Math.abs(-4));
console.log(Math.round(4.657));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.1));

//Random

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log((Math.random() * 10) + 1);

const min = 10
const max = 20


console.log((Math.floor(Math.random() * (max - min + 1))) + min)