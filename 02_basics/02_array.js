const marvel_heros = ["thor", "Spiderman", "Ironman"]
const dc_heros = ["Superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// allHeros = marvel_heros.concat(dc_heros)
// console.log((allHeros));

const allHeros = [...marvel_heros, ...dc_heros]
// console.log(allHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.from("Abhinav"));
console.log(Array.from({name:"Abhinav"}));

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score, score2, score3));