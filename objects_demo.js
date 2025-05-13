// =============================================
// JavaScript Objects - All Concepts with Examples
// =============================================

// 1. Object Creation
let person = {
    name: "Alice",
    age: 30,
    isEmployed: true
  };
  console.log("Person:", person);
  
  
  // 2. Accessing Properties
  console.log("Name:", person.name);        // Dot notation
  console.log("Age:", person["age"]);       // Bracket notation
  
  // 3. Modifying Properties
  person.age = 31;
  person["name"] = "Alicia";
  console.log("Updated Person:", person);
  
  
  // 4. Adding New Properties
  person.country = "India";
  person["email"] = "alice@example.com";
  console.log("After Adding Properties:", person);
  
  
  // 5. Deleting Properties
  delete person.isEmployed;
  console.log("After Deleting isEmployed:", person);
  
  
  // 6. Nested Objects
  let employee = {
    id: 101,
    details: {
      name: "Bob",
      department: "IT"
    }
  };
  console.log("Nested Object:", employee.details.department); // IT
  
  
  // 7. Object Methods (functions inside objects)
  let car = {
    brand: "Toyota",
    model: "Camry",
    start: function () {
      return "Car has started";
    }
  };
  console.log("Car start:", car.start());
  
  
  // 8. 'this' keyword in object
  let user = {
    name: "Ravi",
    greet: function () {
      return "Hi, I’m " + this.name;
    }
  };
  console.log(user.greet()); // "Hi, I’m Ravi"
  
  
  // 9. Looping Through Objects - for...in
  for (let key in person) {
    console.log(key, ":", person[key]);
  }
  
  
  // 10. Object.keys(), Object.values(), Object.entries()
  let product = {
    name: "Laptop",
    price: 50000,
    brand: "HP"
  };
  
  console.log("Keys:", Object.keys(product));       // ["name", "price", "brand"]
  console.log("Values:", Object.values(product));   // ["Laptop", 50000, "HP"]
  console.log("Entries:", Object.entries(product)); // [["name", "Laptop"], ["price", 50000], ...]
  
  
  // 11. Object Copy (Shallow copy)
  let original = { a: 1, b: 2 };
  let copy = Object.assign({}, original);
  copy.a = 99;
  console.log("Original:", original); // { a: 1, b: 2 }
  console.log("Copy:", copy);         // { a: 99, b: 2 }
  
  
  // 12. Spread Operator to copy/merge objects
  let obj1 = { x: 1 };
  let obj2 = { y: 2 };
  let merged = { ...obj1, ...obj2 };
  console.log("Merged Object:", merged);
  
  
  // 13. Optional Chaining (?.)
  let student = {
    name: "Sara",
    address: {
      city: "Delhi"
    }
  };
  console.log("City:", student.address?.city); // Delhi
  console.log("Zip:", student.address?.zip);   // undefined (no error)
  
  
  // 14. Destructuring Objects
  let book = {
    title: "JavaScript Guide",
    author: "MDN",
    pages: 350
  };
  
  let { title, author } = book;
  console.log("Title:", title);   // JavaScript Guide
  console.log("Author:", author); // MDN
  
  
  // 15. Freezing an Object (no changes allowed)
  let constantObj = {
    key: "fixed"
  };
  Object.freeze(constantObj);
  constantObj.key = "changed"; // Ignored in strict mode
  console.log("Frozen Object:", constantObj);
  
  
  // 16. Sealing an Object (can't add/delete, but can update)
  let sealedObj = {
    id: 10,
    name: "Test"
  };
  Object.seal(sealedObj);
  sealedObj.name = "Updated";
  delete sealedObj.id; // Fails
  sealedObj.age = 25;  // Fails
  console.log("Sealed Object:", sealedObj);
  