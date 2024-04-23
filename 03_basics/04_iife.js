// Immediately Invoked Function Expressions


(function chai() {
  //named iife
  console.log(`CHAI`);
}) ();



((name) => {
  //unamed
  console.log(`TWO ${name}`);
})('Abhinav')