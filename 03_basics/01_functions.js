function sayMyName() {
  console.log("Abhinav Shaji");
  console.log("Abhinav Shaji");
  console.log("Abhinav Shaji");
  console.log("Abhinav Shaji");
}

// sayMyName()
// sayMyName()
// sayMyName()

function addTwoNumbers(number1, number2) {
  // console.log(number1 + number2);
  let result = number1 + number2
  return result
}

const result1 = addTwoNumbers(2, 3)

// console.log(result1);

function userLoginMessage(username = "Anil") {
  return `${username} just logged in`
}

// console.log(userLoginMessage("Abhinav"));


function calculateCartPrice(val1, val2, ...num1) {
  return num1
}

// console.log(calculateCartPrice(200, 300, 400, 500));


const user = {
  username: "Abhinav",
  price: 199
}


function handleObject (anyobject) {
  // console.log(`Username is ${anyobject.username} price is ${anyobject.price}`);
}


// handleObject(user)
handleObject({
  username:"Anil",
  price:200
})


const myArray = [200, 400, 600, 700]

function returnSecondValue(getArray) {
  return getArray[1]
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([1, 2, 3, 4, 5]));