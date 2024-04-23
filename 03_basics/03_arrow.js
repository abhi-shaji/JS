const user = {
  username: "Abhinav",
  price: 999,
  welcomeMessage:function() {
    console.log(`${this.username} welcome to website`);
    // console.log(this);
  }
}

// user.welcomeMessage()
// user.username = "Shaji"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//   let username = "Abhinav"
//   console.log(this.username);
// }




// const chai = function() {
//   let username = "Abhinav"
//   console.log(this);
// }

const chai = () => {                  //arrow ffunction
  let username = "Abhinav"
  console.log(this);
} 

// chai()


// const addTwo = (num1, num2) => {
//   return num1 + num2
// }

const addTwo = (num1, num2) =>  num1 + num2 //implicit arrow function




console.log(addTwo(5,2));