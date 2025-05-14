const postData = {
  title: "Learn Fetch API",
  body: "This is a demo post.",
  userId: 1
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(postData)
})
  .then(response => response.json())
  .then(data => console.log("POST Response:", data))
  .catch(error => console.error("POST error:", error));
