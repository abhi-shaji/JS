const name = "Abhinav"
const repoCount = 5

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`); //String interpolation

const gameName = new String("GTA-grand-theft-auto")
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(0));

// console.log(gameName.indexOf("g"));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,5)
console.log(anotherString);

const newStringOne = "    Abhinav     "
console.log(newStringOne);
console.log(newStringOne.trim());



const url = "https://Abhi.com/abhinav&20Shaji" 
console.log(url.replace('&20', '-'));
console.log(url.includes('shine'))

console.log(gameName.split('-'));