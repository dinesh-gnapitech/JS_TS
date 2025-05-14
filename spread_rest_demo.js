// =============================================
// Spread & Rest Operators in JavaScript (ES6)
// =============================================


// 1. SPREAD OPERATOR (...)
// ------------------------
// Used to unpack elements from an array or object

// A. Clone arrays
const original = [1, 2, 3];
const clone = [...original];
console.log("Cloned array:", clone); // [1, 2, 3]

// B. Merge arrays
const more = [4, 5];
const combined = [...original, ...more];
console.log("Combined array:", combined); // [1, 2, 3, 4, 5]

// C. Spread with objects
const person = { name: "Alice", age: 25 };
const details = { ...person, country: "India" };
console.log("Extended object:", details); // { name: "Alice", age: 25, country: "India" }

// D. Overwriting values with spread
const updatedPerson = { ...person, age: 30 };
console.log("Updated age:", updatedPerson); // age becomes 30


// 2. REST OPERATOR (...)
// ----------------------
// Used to gather remaining values into an array or object

// A. Rest in function parameters
function sumAll(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}
console.log("Sum of 1,2,3:", sumAll(1, 2, 3)); // 6
console.log("Sum of 10,20,30,40:", sumAll(10, 20, 30, 40)); // 100

// B. Rest in array destructuring
const colors = ["red", "green", "blue", "yellow"];
const [firstColor, ...restColors] = colors;
console.log("First color:", firstColor); // red
console.log("Rest of colors:", restColors); // ["green", "blue", "yellow"]

// C. Rest in object destructuring
const user = {
  id: 1,
  username: "john_doe",
  email: "john@example.com"
};
const { id, ...otherDetails } = user;
console.log("ID:", id); // 1
console.log("Other details:", otherDetails); // { username, email }
