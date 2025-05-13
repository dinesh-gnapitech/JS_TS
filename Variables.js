// variable declaration in JavaScript

// variable declaration with var
// var is function scoped
// var is hoisted to the top of the function or global scope
// var is re-declarable
// var is re-assignable     
var x = 10;
console.log("The value of x is: " + x);

// variable declaration with let
// let is block scoped
// let is  Cannot be redeclared in the same block
// let is can be updated but not re-declared
// let is Preferred over var 
let y = 20;
console.log("The value of y is: " + y);

// variable declaration with const
// const is block scoped
// const is Must be initialized when declared
// const is Cannot be updated or re-declared
const z = 30;
console.log("The value of z is: " + z);
