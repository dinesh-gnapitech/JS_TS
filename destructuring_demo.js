// =============================================
// Destructuring in JavaScript (ES6)
// =============================================

// 1. Array Destructuring
const colors = ["red", "green", "blue"];

// Unpack values by position
const [first, second, third] = colors;
console.log("First:", first);   // red
console.log("Second:", second); // green
console.log("Third:", third);   // blue

// Skipping values
const [, , onlyBlue] = colors;
console.log("Only Blue:", onlyBlue); // blue

// Default values
const [a = "white", b = "black", c = "gray", d = "yellow"] = colors;
console.log("Fourth (with default):", d); // yellow

// Swapping variables using destructuring
let x = 1, y = 2;
[x, y] = [y, x];
console.log("Swapped x:", x, "y:", y); // x: 2, y: 1


// 2. Object Destructuring
const user = {
  name: "Alice",
  age: 28,
  country: "India"
};

// Unpack by property name
const { name, age } = user;
console.log("Name:", name); // Alice
console.log("Age:", age);   // 28

// Rename while destructuring
const { country: nation } = user;
console.log("Country as nation:", nation); // India

// Default value for non-existing property
const { email = "not_provided@example.com" } = user;
console.log("Email:", email); // not_provided@example.com


// 3. Nested Object Destructuring
const student = {
  id: 101,
  fullName: "Bob Smith",
  scores: {
    math: 90,
    english: 85
  }
};

const {
  fullName,
  scores: { math, english }
} = student;

console.log("Full Name:", fullName); // Bob Smith
console.log("Math Score:", math);    // 90
console.log("English Score:", english); // 85


// 4. Destructuring in Function Parameters
function showProfile({ name, age, country }) {
  console.log(`${name} is ${age} years old from ${country}.`);
}

showProfile(user); // Alice is 28 years old from India.
