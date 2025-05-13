// Data types in JavaScript
// JavaScript has dynamic typing, which means you don't have to declare the type of a variable when you create it.

// JavaScript has 7 primitive data types:

// 1. string: represents a sequence of characters
let greeting = "Hello, World!";
console.log("String:", greeting, "| Type:", typeof greeting);

// 2. number: represents both integer and floating-point numbers
let age = 25;
let temperature = 36.6;
console.log("Number (int):", age, "| Type:", typeof age);
console.log("Number (float):", temperature, "| Type:", typeof temperature);

// 3. boolean: represents a logical entity and can have two values: true or false
let isStudent = true;
console.log("Boolean:", isStudent, "| Type:", typeof isStudent);

// 4. null: represents the intentional absence of any object value
let selectedItem = null;
console.log("Null:", selectedItem, "| Type:", typeof selectedItem); // Note: typeof null is "object" (quirk in JS)

// 5. undefined: represents a variable that has been declared but has not yet been assigned a value
let notAssigned;
console.log("Undefined:", notAssigned, "| Type:", typeof notAssigned);

// 6. symbol: represents a unique and immutable value that can be used as an identifier for object properties
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log("Symbol (unique):", sym1 === sym2, "| Type of sym1:", typeof sym1);

// 7. bigint: represents integers with arbitrary precision
let bigNum = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigNum, "| Type:", typeof bigNum);

// JavaScript also has non-primitive data types:

// 1. object: represents a collection of key-value pairs
let person = {
  name: "Alice",
  age: 30,
};
console.log("Object:", person, "| Type:", typeof person);

// 2. array: represents a list of values
let colors = ["red", "green", "blue"];
console.log("Array:", colors, "| Type:", typeof colors); // typeof returns 'object' for arrays too

// 3. function: represents a block of code that can be called and executed
function sayHello(name) {
  return "Hello, " + name + "!";
}
console.log("Function output:", sayHello("John"), "| Type of function:", typeof sayHello);
