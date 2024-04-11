


let a = 300
if (true) {
  let a = 10
  const b = 20
  var c = 30
  // console.log("inner", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Abhinav"

  function two(){
    const website = "youtube"
    console.log(username);
  }
  two()
}

// one()

if(true){
  const username = "Abhinav"
  if(username == "Abhinav") {
    const website = " youtube"
    // console.log(username + website);
  }
}


//----------------------------------------------------- intresting ----------------------------------------------

console.log(addOne(5));

function addOne(num) {
  return num + 1
}


// console.log(addTwo(5)); in expression form function we cannot call it before declaration

const addTwo = function(num) {
  return num + 2
}