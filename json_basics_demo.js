// =============================================
// JSON Basics in JavaScript
// =============================================

// 1. JavaScript Object
const user = {
  name: "Alice",
  age: 30,
  isMember: true,
  skills: ["JavaScript", "Python"],
  address: {
    city: "Mumbai",
    country: "India"
  }
};

console.log("Original JavaScript Object:", user);

// 2. Convert JS Object to JSON String (Serialization)
const jsonString = JSON.stringify(user);
console.log("JSON String:", jsonString);

// 3. Convert JSON String back to JS Object (Deserialization)
const parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);

// 4. Example: Send and receive JSON via API (simulation)
function simulateApiSend(jsonData) {
  console.log("Sending to server (JSON):", jsonData);
}

function simulateApiReceive() {
  const received = '{"product":"Laptop","price":45000,"inStock":true}';
  console.log("Received JSON from server:", received);
  return JSON.parse(received);
}

// Simulating API actions
simulateApiSend(JSON.stringify(user));
const productData = simulateApiReceive();
console.log("Parsed Product Object:", productData);

// 5. Pretty Print JSON
const prettyJson = JSON.stringify(user, null, 2);
console.log("Pretty Printed JSON:\n", prettyJson);
