// Operators in JavaScript

// 1. Arithmetic Operators
// Used to perform mathematical operations like +, -, *, /, %, ** (power)

let a = 10 + 5; // Addition
console.log("Addition (10 + 5):", a, "| Type:", typeof a); // Output: 15

let b = 20 - 4; // Subtraction
console.log("Subtraction (20 - 4):", b); // Output: 16

let c = 6 * 7; // Multiplication
console.log("Multiplication (6 * 7):", c); // Output: 42

let d = 25 / 5; // Division
console.log("Division (25 / 5):", d); // Output: 5

let e = 17 % 3; // Modulus (Remainder)
console.log("Modulus (17 % 3):", e); // Output: 2

let f = 2 ** 3; // Exponentiation (2^3)
console.log("Exponentiation (2 ** 3):", f); // Output: 8


// 2. Comparison Operators
// Used to compare values and return true or false

let isEqual = (a == 15); // Equal to (value only)
console.log("a == 15:", isEqual); // true

let isStrictEqual = (a === "15"); // Strict equal (value + type)
console.log("a === '15':", isStrictEqual); // false (number !== string)

let isNotEqual = (a != 20); // Not equal
console.log("a != 20:", isNotEqual); // true

let isGreater = (a > 10); // Greater than
console.log("a > 10:", isGreater); // true

let isLess = (a < 20); // Less than
console.log("a < 20:", isLess); // true

let isGreaterOrEqual = (a >= 15); // Greater than or equal to
console.log("a >= 15:", isGreaterOrEqual); // true

let isLessOrEqual = (a <= 14); // Less than or equal to
console.log("a <= 14:", isLessOrEqual); // false


// 3. Logical Operators
// Used to combine multiple boolean expressions

let logic1 = true && false; // AND: true only if both are true
console.log("true && false:", logic1); // false

let logic2 = true || false; // OR: true if at least one is true
console.log("true || false:", logic2); // true

let logic3 = !true; // NOT: reverses the value
console.log("!true:", logic3); // false
