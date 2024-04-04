let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date("12-21-2023")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myCreatedDate.getTime());
// console.log(Date.now());


let newDate = new Date()
console.log(myDate.getDay());

console.log(newDate.toLocaleString('defalult', {
  weekday:"long"
}));