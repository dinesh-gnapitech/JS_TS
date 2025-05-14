// =============================================
// Template Literals in JavaScript (ES6)
// =============================================

// 1. Basic usage
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Alice!

// 2. Expressions inside `${}`
const a = 10;
const b = 5;
const sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum); // The sum of 10 and 5 is 15.

// 3. Multi-line strings (no \n needed)
const multiLine = `
This is a multi-line string.
It spans across multiple lines.
Very easy with backticks!
`;
console.log(multiLine);

// 4. Nested template literals (used with functions)
function fullName(user) {
  return `${user.first} ${user.last}`;
}

const user = { first: "John", last: "Doe" };
const message = `Welcome, ${fullName(user)}!`;
console.log(message); // Welcome, John Doe!

// 5. HTML templates (for DOM usage)
const product = "Laptop";
const price = 50000;

const html = `
  <div>
    <h2>${product}</h2>
    <p>Price: ₹${price}</p>
  </div>
`;

console.log("HTML template:\n", html);
