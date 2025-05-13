// Basic.js
// Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine

// use of log function
console.log("Basic.js loaded");

// variable declaration
// variable declaration with var
var x = 10;
console.log("The value of x is: " + x);

// variable declaration with let    
let y = 20;
console.log("The value of y is: " + y);
// variable declaration with const
const z = 30;
console.log("The value of z is: " + z);

// Data types in JavaScript
// JavaScript has dynamic typing, which means you don't have to declare the type of a variable when you create it.
// JavaScript has 7 primitive data types: string, number, boolean, null, undefined, symbol, and bigint
// 1. string: represents a sequence of characters
// 2. number: represents both integer and floating-point numbers
// 3. boolean: represents a logical entity and can have two values: true or false
// 4. null: represents the intentional absence of any object value
// 5. undefined: represents a variable that has been declared but has not yet been assigned a value
// 6. symbol: represents a unique and immutable value that can be used as an identifier for object properties
// 7. bigint: represents integers with arbitrary precision
// JavaScript also has non-primitive data types: object, array, and function
// 1. object: represents a collection of key-value pairs
// 2. array: represents a list of values
// 3. function: represents a block of code that can be called and executed

// variable declaration with var
var a = "Hello World";
// variable declaration with let
let p = 10;
console.log("The value of p is: " + p);
// checking the type of variable
console.log("Data type of x is: "+(typeof x)); // number
// variable declaration with let
let q = "Hello World";
console.log("The value of y is: " + y);
// checking the type of variable
console.log("Data type of y is: "+(typeof y)); // string
// variable declaration with let
let r = true;
console.log("The value of z is: " + z);
// checking the type of variable
console.log("Data type of z is: "+(typeof z)); // boolean
// variable declaration with let
let s = null;
console.log("The value of a is: " + a);
// checking the type of variable
console.log("Data type of a is: "+(typeof a)); // object
// variable declaration with let
let b = undefined;
console.log("The value of b is: " + b);
// checking the type of variable
console.log("Data type of b is: "+(typeof b)); // undefined
// variable declaration with let
let d = BigInt(1234567890123456789012345678901234567890);
console.log("The value of d is: " + d);
// checking the type of variable
console.log("Data type of d is: "+(typeof d)); // bigint
// variable declaration with let
let e = {name: "John", age: 30};
console.log("The value of e is: " + e);
// checking the type of variable
console.log("Data type of e is: "+(typeof e)); // object
