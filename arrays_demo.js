// =============================================
// JavaScript Arrays - All Concepts with Examples
// =============================================

// 1. Array Declaration
let fruits = ["apple", "banana", "cherry"];
console.log("Fruits:", fruits); // ["apple", "banana", "cherry"]


// 2. Accessing Elements (index starts at 0)
console.log("First fruit:", fruits[0]); // apple
console.log("Last fruit:", fruits[fruits.length - 1]); // cherry


// 3. Modifying Elements
fruits[1] = "blueberry";
console.log("Modified Fruits:", fruits); // ["apple", "blueberry", "cherry"]


// 4. Array Length
console.log("Number of fruits:", fruits.length); // 3


// 5. Adding Elements
fruits.push("mango");         // Add to end
fruits.unshift("orange");     // Add to beginning
console.log("After push & unshift:", fruits);


// 6. Removing Elements
fruits.pop();    // Removes last item
fruits.shift();  // Removes first item
console.log("After pop & shift:", fruits);


// 7. Looping Through Arrays
// Using for loop
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit at index", i, "is", fruits[i]);
}

// Using for...of
for (let fruit of fruits) {
  console.log("Using for...of:", fruit);
}

// Using forEach
fruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});


// 8. Array Methods
let numbers = [1, 2, 3, 4, 5];

// map() – creates a new array by applying a function
let squares = numbers.map(n => n * n);
console.log("Squares:", squares); // [1, 4, 9, 16, 25]

// filter() – returns items that meet a condition
let even = numbers.filter(n => n % 2 === 0);
console.log("Even numbers:", even); // [2, 4]

// reduce() – reduces the array to a single value
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log("Sum:", sum); // 15


// 9. includes() – checks if value exists
console.log("Includes 3?", numbers.includes(3)); // true

// indexOf() – returns index of a value
console.log("Index of 4:", numbers.indexOf(4)); // 3

// join() – joins array into a string
console.log("Join with dash:", fruits.join(" - "));


// 10. concat() – combine arrays
let moreFruits = ["kiwi", "pineapple"];
let allFruits = fruits.concat(moreFruits);
console.log("All fruits:", allFruits);


// 11. slice() – copy part of the array
let someFruits = allFruits.slice(1, 4);
console.log("Sliced fruits (1 to 3):", someFruits);


// 12. splice() – remove/replace items (modifies original)
allFruits.splice(2, 1, "grape"); // remove 1 item at index 2, insert "grape"
console.log("After splice:", allFruits);


// 13. Nested Arrays
let matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];
console.log("Element at [1][1]:", matrix[1][1]); // 4


// 14. Check if value is an array
console.log("Is array?", Array.isArray(fruits)); // true
