const isUserLoggedIn = true
const temperature = 51

// if(temperature < 50) {
//   console.log("less than 50");
// } else {
//   console.log("greater than 50");
// }

// score = 200

// if(score > 100) {
//   const power = "fly"
//   console.log(`User Power: ${power}`);
// }


const balance = 501

// if (balance > 500) console.log("test"); 

// if(balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard) {
  console.log("Allow user to buy");
}

if(loggedInFromEmail || loggedInFromGoogle) {
  console.log("User logged in");
}