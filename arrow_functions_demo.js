// =============================================
// Arrow Functions in JavaScript (ES6+)
// =============================================

// 1. Basic Arrow Function with Two Parameters
const multiply = (x, y) => x * y;
console.log("multiply(2, 3):", multiply(2, 3)); // 6

// 2. Arrow Function with One Parameter (no parentheses needed)
const square = n => n * n;
console.log("square(4):", square(4)); // 16

// 3. Arrow Function with No Parameters
const greet = () => console.log("Hello from arrow function!");
greet(); // Hello from arrow function!

// 4. Multi-line Arrow Function (use return keyword)
const subtract = (a, b) => {
  let result = a - b;
  return result;
};
console.log("subtract(10, 4):", subtract(10, 4)); // 6

// 5. Returning an Object (wrap with parentheses)
const createUser = (name, age) => ({ name, age });
console.log("createUser('Alice', 25):", createUser("Alice", 25)); // { name: 'Alice', age: 25 }

// 6. Arrow Function in Array Method (Callback)
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log("Doubled array:", doubled); // [2, 4, 6]

// 7. Arrow Function and 'this' Behavior
const person = {
  name: "John",
  greet: function () {
    console.log("Traditional function:", "Hello, I'm " + this.name); // this = person
  },
  greetArrow: () => {
    console.log("Arrow function:", "Hello, I'm " + this.name); // this = window/global
  }
};

person.greet();       // Hello, I'm John
person.greetArrow();  // Hello, I'm undefined (or window.name in browser)

// =============================================
// When to Use Arrow Functions:
// - For short utilities and callbacks
// - When you don’t need your own 'this'
// Avoid:
// - For object methods
// - For constructors or class methods
// =============================================
