// singleton

// object literals

const mySym = Symbol("key1")

const jsUser = {
  name: "Abhinav",
  "full name": "Abhinav Shaji",
  [mySym]: "mykey1",
  age: 21,
  location: "Kozhikode",
  email: "abhinavshaji@tcs.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]); // access full name as it is not accesible by dot(.)
// console.log(jsUser[mySym]); // acess symbol from Object
// console.log(jsUser);

// Object.freeze(jsUser)  => Does not allow object to change the values
// jsUser.email = "Abhinav@gmail.com"
// console.log(jsUser);


jsUser.greeting = function(){
  console.log(`Hello JS user, ${this.name}`);
}

// console.log(jsUser);
console.log(jsUser.greeting());
console.log(jsUser.greeting);
