const userEmail = []

if (userEmail) {
  console.log("Got user Email");
} else {
  console.log("Dont have user email");
}

//falsy
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy
// "0", "false", " ", [], {}, function() {}

// ??

a = null ?? 10
b = undefined ?? 20

console.log(`${a} ${b}`);


// Terninary Operator
// condition ? true : false

const teaPrice = 60

teaPrice > 50 ? console.log("price greater than 50") : console.log("price less than 50");
