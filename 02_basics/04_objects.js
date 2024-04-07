const tinderUser = new Object() 

tinderUser.id = "123abc"
tinderUser.name = "Abhinav"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularuser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Abhinav",
      lastname: "Shaji"
    }
  }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "C", 4: "D"}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));




const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
}

const {courseInstructor: instructor} = course
console.log(instructor);

// {
//   "name": "Abhinav",
//   "price": "21"
// }