// =============================================
// JavaScript Functions 
// =============================================

// 1. Basic Function Declaration
function greet() {
    console.log("Hello!");
  }
  greet(); // Calling the function
  
  
  // 2. Function with Parameters
  function greetUser(name) {
    console.log("Hello, " + name + "!");
  }
  greetUser("Alice"); // Output: Hello, Alice!
  
  
  // 3. Function with Return Value
  function add(a, b) {
    return a + b;
  }
  let result = add(5, 3); // 8
  console.log("Result of add(5, 3):", result);
  
  
  // 4. Function Expression
  // You can assign a function to a variable
  const multiply = function (x, y) {
    return x * y;
  };
  console.log("multiply(4, 5):", multiply(4, 5)); // 20
  
  
  // 5. Arrow Functions (ES6)
  // Shorter syntax for function expressions
  const square = (n) => n * n;
  console.log("square(6):", square(6)); // 36
  
  const sayHi = () => console.log("Hi from arrow function!");
  sayHi();
  
  const sum = (a, b) => a + b;
  console.log("sum(2, 3):", sum(2, 3)); // 5
  
  
  // 6. Default Parameters
  // Default value used if argument is not provided
  function welcome(name = "Guest") {
    console.log("Welcome, " + name + "!");
  }
  welcome();           // Uses default "Guest"
  welcome("David");    // Uses passed value
  
  
  // 7. Rest Parameters (...)
  // Collects all arguments into an array
  function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  console.log("sumAll(1, 2, 3, 4):", sumAll(1, 2, 3, 4)); // 10
  
  
  // 8. Callback Function
  // A function passed as an argument to another function
  function greetAndFarewell(name, callback) {
    console.log("Hello, " + name);
    callback(); // Call the callback function
  }
  
  function sayBye() {
    console.log("Goodbye!");
  }
  
  greetAndFarewell("Alice", sayBye);
  
  
  // 9. Anonymous Function
  // A function without a name, usually used immediately
  setTimeout(function () {
    console.log("Runs after 2 seconds");
  }, 2000);
  
  
  // 10. IIFE (Immediately Invoked Function Expression)
  // Executes automatically after creation
  (function () {
    console.log("This runs immediately!");
  })();
  
  
  // 11. Arrow Function & 'this' keyword difference
  const person = {
    name: "John",
    greet: function () {
      console.log("Hi, I'm " + this.name); // Correct usage
    },
    greetArrow: () => {
      console.log("Hi, I'm " + this.name); //  Wrong: 'this' doesn't refer to 'person'
    }
  };
  
  person.greet();       // Works as expected
  person.greetArrow();  // 'this.name' will be undefined
  