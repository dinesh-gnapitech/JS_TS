// =============================================
// Fetch API - GET and POST Requests
// =============================================

// 1. GET Request - Fetch random joke from public API
fetch("https://api.chucknorris.io/jokes/random")
  .then(response => response.json())
  .then(data => {
    console.log("Random Joke:", data.value);
  })
  .catch(error => console.error("GET error:", error));

// -----------------------------------------------

// 2. POST Request - Send data to test API (reqres.in)
const userData = {
  name: "Alice",
  job: "Developer"
};

fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(userData)
})
  .then(response => response.json())
  .then(data => {
    console.log("POST Response:", data);
  })
  .catch(error => console.error("POST error:", error));
